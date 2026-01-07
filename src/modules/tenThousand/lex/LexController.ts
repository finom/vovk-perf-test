import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lex")
export default class LexController {
  @operation({
    summary: "Get Lex",
  })
  @get()
  static getLex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lex",
  })
  @post("{id}")
  static createLex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
