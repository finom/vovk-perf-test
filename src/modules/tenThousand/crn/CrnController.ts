import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crn")
export default class CrnController {
  @operation({
    summary: "Get Crn",
  })
  @get()
  static getCrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crn",
  })
  @post("{id}")
  static createCrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
