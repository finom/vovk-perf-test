import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aces")
export default class AceController {
  @operation({
    summary: "Get Aces",
  })
  @get()
  static getAces = procedure({
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
