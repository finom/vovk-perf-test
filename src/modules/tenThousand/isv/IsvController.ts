import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isvs")
export default class IsvController {
  @operation({
    summary: "Get Isvs",
  })
  @get()
  static getIsvs = procedure({
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
