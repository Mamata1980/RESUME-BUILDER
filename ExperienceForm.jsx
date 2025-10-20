import { Briefcase, Plus, Sparkles, SparklesIcon } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({ data, onChange }) => {

    const addExperience = () => {
        const newExperience = {
            company: " ",
            position: " ",
            start_Date: " ",
            end_Date: " ",
            description: " ",
            is_current: false
        };
        onChange([...data, newExperience])
    }

    const removeExperience = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }



    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Experience</h3>
                    <p className='text-sm text-gray-500'>Add your job experience</p>
                </div>
                <button className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 
                  transition-colors disabled:opacity-50'>
                    <Plus className="size-4" />
                    Add Experience
                </button>
            </div>
            {data.length === 0 ? (
                <div className='text-center py-8 text-gray-500'>
                    <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No work experience added yet.</p>
                    <p>Click "Add Experience" to get started.</p>
                </div>
            ) : (
                <div>
                    {data.map((experience, index) => (
                        <div key={index}>
                            <div>
                                <h4>Experience #{index + 1}</h4>
                                <button onClick={() => removeExperience(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                                    <Trash2 className="size-4" />
                                </button>
                            </div>
                            <div className='grid md:grid-cols-2 gap-3'>
                                <input value={experience.company || " "} onChange={(e) => updateExperience(index, "company", e.target.value)}
                                    type="text" placeholder="Company Name" />
                                <input value={experience.position || " "} onChange={(e) => updateExperience(index, "position", e.target.value)}
                                    type="text" placeholder="Job Title" />
                            </div>
                            <label>
                                <input type="checkbox" checked={experience.is_current || false}
                                    onChange={(e) => { updateExperience(index, "is_current", e.target.checked ? true : false); }}
                                    className='rounded border-gray-300 text-blue-600 focus:ring-blue-500' />
                                <span>Currently working here</span>
                            </label>
                            <div className="space-y-2">
                                <div>
                                    <lable>Job Description</lable>
                                    <button>
                                        <Sparkles className='w-3 h-3' />
                                        Enhance with AI
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ExperienceForm