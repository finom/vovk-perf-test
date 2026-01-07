import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
