import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jji")
export default class JjiController {
  @operation({
    summary: "Get Jji",
  })
  @get()
  static getJji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jji",
  })
  @post("{id}")
  static createJji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
