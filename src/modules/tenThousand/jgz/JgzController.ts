import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgz")
export default class JgzController {
  @operation({
    summary: "Get Jgz",
  })
  @get()
  static getJgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgz",
  })
  @post("{id}")
  static createJgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
