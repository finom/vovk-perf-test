import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoj")
export default class EojController {
  @operation({
    summary: "Get Eoj",
  })
  @get()
  static getEoj = procedure({
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
