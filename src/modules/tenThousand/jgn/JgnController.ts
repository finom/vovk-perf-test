import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgn")
export default class JgnController {
  @operation({
    summary: "Get Jgn",
  })
  @get()
  static getJgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgn",
  })
  @post("{id}")
  static createJgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
