import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edu")
export default class EduController {
  @operation({
    summary: "Get Edu",
  })
  @get()
  static getEdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edu",
  })
  @post("{id}")
  static createEdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
