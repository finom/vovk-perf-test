import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abjs")
export default class AbjController {
  @operation({
    summary: "Get Abjs",
  })
  @get()
  static getAbjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abj",
  })
  @post("{id}")
  static createAbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
