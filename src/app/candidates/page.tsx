"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Upload,
  User,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Code,
  FileText } from
"lucide-react";
import { skillsList, locations } from "@/lib/data";

const candidateSchema = z.
object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  location: z.string().min(1, "Location is required"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  experience: z.
  string().
  min(10, "Experience description must be at least 10 characters"),
  salaryMin: z.number().min(0, "Minimum salary must be positive"),
  salaryMax: z.number().min(0, "Maximum salary must be positive")
}).
refine((data) => data.salaryMax >= data.salaryMin, {
  message: "Maximum salary must be greater than or equal to minimum salary",
  path: ["salaryMax"]
});

type CandidateForm = z.infer<typeof candidateSchema>;

export default function CandidatesPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<CandidateForm>({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      skills: []
    }
  });

  const handleSkillToggle = (skill: string) => {
    const newSkills = selectedSkills.includes(skill) ?
    selectedSkills.filter((s) => s !== skill) :
    [...selectedSkills, skill];

    setSelectedSkills(newSkills);
    setValue("skills", newSkills);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setCvFile(file);
    } else {
      alert("Please upload a PDF file");
    }
  };

  const onSubmit = (data: CandidateForm) => {
    console.log("Candidate data:", data);
    console.log("CV file:", cvFile);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 py-12 px-4 sm:px-6 lg:px-8"
        data-oid="kz:lel8">

        <div className="max-w-2xl mx-auto" data-oid="cmzcavb">
          <div className="card text-center" data-oid="5i0:99i">
            <div
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              data-oid="q331w56">

              <User className="text-green-600" size={32} data-oid="93jhy4r" />
            </div>
            <h1
              className="text-3xl font-bold text-secondary-900 mb-4"
              data-oid="gp0.mkz">

              Registration Successful!
            </h1>
            <p className="text-secondary-600 mb-6" data-oid="h03xs.f">
              Thank you for registering with TechRecruit Pro. Our team will
              review your profile and contact you with relevant job
              opportunities.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
              data-oid="hs-yey4">

              Register Another Candidate
            </button>
          </div>
        </div>
      </div>);

  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 py-12 px-4 sm:px-6 lg:px-8"
      data-oid="-7bx_ig">

      <div className="max-w-4xl mx-auto" data-oid="zzzmjvp">
        <div className="text-center mb-8" data-oid="27p5gni">
          <h1
            className="text-4xl font-bold text-secondary-900 mb-4"
            data-oid="9hyzvxi">

            Join Our Talent Network
          </h1>
          <p className="text-xl text-secondary-600" data-oid="k76vn93">
            Register your profile and get matched with exciting job
            opportunities
          </p>
        </div>

        <div className="card" data-oid=":slp2-v">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            data-oid="oodist2">

            {/* Personal Information */}
            <div data-oid=":m2ag_x">
              <h2
                className="text-2xl font-semibold text-secondary-900 mb-4 flex items-center"
                data-oid="38sbgu1">

                <User className="mr-2" size={24} data-oid="h91c-c1" />
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4" data-oid="q1uzv4k">
                <div data-oid="rcergkq">
                  <label
                    className="block text-sm font-medium text-secondary-700 mb-2"
                    data-oid="awzwff8">

                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    className="input-field"
                    placeholder="John Doe"
                    data-oid="vsexybm" />


                  {errors.name &&
                  <p className="text-red-500 text-sm mt-1" data-oid="3xpjx2i">
                      {errors.name.message}
                    </p>
                  }
                </div>
                <div data-oid="mktjef4">
                  <label
                    className="block text-sm font-medium text-secondary-700 mb-2"
                    data-oid="02hxat-">

                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="input-field"
                    placeholder="john@example.com"
                    data-oid="2qokrc4" />


                  {errors.email &&
                  <p className="text-red-500 text-sm mt-1" data-oid=".wc4gz6">
                      {errors.email.message}
                    </p>
                  }
                </div>
                <div data-oid=".ebsw1.">
                  <label
                    className="block text-sm font-medium text-secondary-700 mb-2"
                    data-oid="jo67g1x">

                    Phone Number *
                  </label>
                  <input
                    {...register("phone")}
                    className="input-field"
                    placeholder="+49 123 456 7890"
                    data-oid="-976:9_" />


                  {errors.phone &&
                  <p className="text-red-500 text-sm mt-1" data-oid="7d81g4l">
                      {errors.phone.message}
                    </p>
                  }
                </div>
                <div data-oid="p_i_e57">
                  <label
                    className="block text-sm font-medium text-secondary-700 mb-2"
                    data-oid="g::gg_y">

                    Location *
                  </label>
                  <select
                    {...register("location")}
                    className="input-field"
                    data-oid="u7tlqth">

                    <option value="" data-oid="ovbl.ly">
                      Select location
                    </option>
                    {locations.map((location) =>
                    <option
                      key={location}
                      value={location}
                      data-oid="1yholpq">

                        {location}
                      </option>
                    )}
                  </select>
                  {errors.location &&
                  <p className="text-red-500 text-sm mt-1" data-oid="-mwxv3r">
                      {errors.location.message}
                    </p>
                  }
                </div>
              </div>
            </div>

            {/* Skills */}
            <div data-oid="qo8zxn-">
              <h2
                className="text-2xl font-semibold text-secondary-900 mb-4 flex items-center"
                data-oid="y4h5c1t">

                <Code className="mr-2" size={24} data-oid="09bg5eb" />
                Technical Skills *
              </h2>
              <p className="text-secondary-600 mb-4" data-oid="0hs1sr7">
                Select all skills that apply to you:
              </p>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-2"
                data-oid="gk5p-o4">

                {skillsList.map((skill) =>
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                  selectedSkills.includes(skill) ?
                  "bg-primary-600 text-white border-primary-600" :
                  "bg-white text-secondary-700 border-secondary-300 hover:border-primary-300"}`
                  }
                  data-oid="4hbl:4x">

                    {skill}
                  </button>
                )}
              </div>
              {errors.skills &&
              <p className="text-red-500 text-sm mt-2" data-oid="lpsqqo.">
                  {errors.skills.message}
                </p>
              }
            </div>

            {/* Experience */}
            <div data-oid=":73naba">
              <label
                className="block text-sm font-medium text-secondary-700 mb-2"
                data-oid="balneak">

                Professional Experience *
              </label>
              <textarea
                {...register("experience")}
                rows={4}
                className="input-field"
                placeholder="Describe your professional experience, key achievements, and expertise..."
                data-oid="ifmm:xl" />


              {errors.experience &&
              <p className="text-red-500 text-sm mt-1" data-oid="eb2wiwj">
                  {errors.experience.message}
                </p>
              }
            </div>

            {/* Salary Expectations */}
            <div data-oid="7r9kbk8">
              <h2
                className="text-2xl font-semibold text-secondary-900 mb-4 flex items-center"
                data-oid="i17e8wg">

                <DollarSign className="mr-2" size={24} data-oid="3pnfhdw" />
                Salary Expectations (EUR/year)
              </h2>
              <div className="grid md:grid-cols-2 gap-4" data-oid="1drdf:c">
                <div data-oid="9mft2:y">
                  <label
                    className="block text-sm font-medium text-secondary-700 mb-2"
                    data-oid="28--_uy">

                    Minimum Salary *
                  </label>
                  <input
                    {...register("salaryMin", { valueAsNumber: true })}
                    type="number"
                    className="input-field"
                    placeholder="50000"
                    data-oid="f4yfcjb" />


                  {errors.salaryMin &&
                  <p className="text-red-500 text-sm mt-1" data-oid="nnt9x1u">
                      {errors.salaryMin.message}
                    </p>
                  }
                </div>
                <div data-oid="g8.y:0l">
                  <label
                    className="block text-sm font-medium text-secondary-700 mb-2"
                    data-oid="u9vknnh">

                    Maximum Salary *
                  </label>
                  <input
                    {...register("salaryMax", { valueAsNumber: true })}
                    type="number"
                    className="input-field"
                    placeholder="80000"
                    data-oid=":2v1qbv" />


                  {errors.salaryMax &&
                  <p className="text-red-500 text-sm mt-1" data-oid="sdxcp3:">
                      {errors.salaryMax.message}
                    </p>
                  }
                </div>
              </div>
            </div>

            {/* CV Upload */}
            <div data-oid="ptz30q0">
              <h2
                className="text-2xl font-semibold text-secondary-900 mb-4 flex items-center"
                data-oid="5r1viwc">

                <FileText className="mr-2" size={24} data-oid="12tmzj." />
                Upload CV (PDF)
              </h2>
              <div
                className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center"
                data-oid="wpbenca">

                <Upload
                  className="mx-auto text-secondary-400 mb-4"
                  size={48}
                  data-oid="_u9j6bq" />

                <label className="cursor-pointer" data-oid=".ovt7bh">
                  <span
                    className="text-primary-600 hover:text-primary-700 font-medium"
                    data-oid="rux9lfc">

                    Click to upload your CV
                  </span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    data-oid="4_2d_50" />

                </label>
                <p
                  className="text-secondary-500 text-sm mt-2"
                  data-oid="xfwad8u">

                  PDF files only, max 5MB
                </p>
                {cvFile &&
                <p className="text-green-600 text-sm mt-2" data-oid="sp:mhnv">
                    ✓ {cvFile.name} uploaded successfully
                  </p>
                }
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-lg py-3"
              data-oid="q:vf6qg">

              Register as Candidate
            </button>
          </form>
        </div>
      </div>
    </div>);

}