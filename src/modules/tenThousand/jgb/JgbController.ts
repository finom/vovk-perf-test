import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgb")
export default class JgbController {
  @operation({
    summary: "Get Jgb",
  })
  @get()
  static getJgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgb",
  })
  @post("{id}")
  static createJgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
