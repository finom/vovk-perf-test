import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lex")
export default class LexController {
  @operation({
    summary: "Get Lex",
  })
  @get()
  static getLex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lex",
  })
  @post("{id}")
  static createLex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
