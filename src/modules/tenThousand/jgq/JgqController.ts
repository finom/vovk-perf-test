import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgq")
export default class JgqController {
  @operation({
    summary: "Get Jgq",
  })
  @get()
  static getJgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgq",
  })
  @post("{id}")
  static createJgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
