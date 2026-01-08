import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ast")
export default class AstController {
  @operation({
    summary: "Get Ast",
  })
  @get()
  static getAst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ast",
  })
  @post("{id}")
  static createAst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
