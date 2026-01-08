import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbj")
export default class JbjController {
  @operation({
    summary: "Get Jbj",
  })
  @get()
  static getJbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbj",
  })
  @post("{id}")
  static createJbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
