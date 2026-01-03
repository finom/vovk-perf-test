import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eojs")
export default class EojController {
  @operation({
    summary: "Get Eojs",
  })
  @get()
  static getEojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoj",
  })
  @post("{id}")
  static createEoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
