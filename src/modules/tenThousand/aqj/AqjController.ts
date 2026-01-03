import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqjs")
export default class AqjController {
  @operation({
    summary: "Get Aqjs",
  })
  @get()
  static getAqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqj",
  })
  @post("{id}")
  static createAqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
