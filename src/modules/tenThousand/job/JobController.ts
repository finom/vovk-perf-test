import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("job")
export default class JobController {
  @operation({
    summary: "Get Job",
  })
  @get()
  static getJob = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Job",
  })
  @post("{id}")
  static createJob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
