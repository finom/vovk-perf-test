import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlr")
export default class JlrController {
  @operation({
    summary: "Get Jlr",
  })
  @get()
  static getJlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlr",
  })
  @post("{id}")
  static createJlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
