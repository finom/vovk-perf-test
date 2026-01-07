import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ace")
export default class AceController {
  @operation({
    summary: "Get Ace",
  })
  @get()
  static getAce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ace",
  })
  @post("{id}")
  static createAce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
