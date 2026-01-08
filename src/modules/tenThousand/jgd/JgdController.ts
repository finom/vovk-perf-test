import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgd")
export default class JgdController {
  @operation({
    summary: "Get Jgd",
  })
  @get()
  static getJgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgd",
  })
  @post("{id}")
  static createJgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
