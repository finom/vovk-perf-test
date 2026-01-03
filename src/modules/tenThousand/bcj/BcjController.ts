import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcjs")
export default class BcjController {
  @operation({
    summary: "Get Bcjs",
  })
  @get()
  static getBcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcj",
  })
  @post("{id}")
  static createBcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
