import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlm")
export default class HlmController {
  @operation({
    summary: "Get Hlm",
  })
  @get()
  static getHlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlm",
  })
  @post("{id}")
  static createHlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
