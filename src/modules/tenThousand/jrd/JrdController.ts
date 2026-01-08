import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrd")
export default class JrdController {
  @operation({
    summary: "Get Jrd",
  })
  @get()
  static getJrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrd",
  })
  @post("{id}")
  static createJrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
