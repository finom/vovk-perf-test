import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isv")
export default class IsvController {
  @operation({
    summary: "Get Isv",
  })
  @get()
  static getIsv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isv",
  })
  @post("{id}")
  static createIsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
