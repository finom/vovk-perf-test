import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsc")
export default class JscController {
  @operation({
    summary: "Get Jsc",
  })
  @get()
  static getJsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsc",
  })
  @post("{id}")
  static createJsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
