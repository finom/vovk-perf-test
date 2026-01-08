import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgv")
export default class JgvController {
  @operation({
    summary: "Get Jgv",
  })
  @get()
  static getJgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgv",
  })
  @post("{id}")
  static createJgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
