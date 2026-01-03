import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aews")
export default class AewController {
  @operation({
    summary: "Get Aews",
  })
  @get()
  static getAews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aew",
  })
  @post("{id}")
  static createAew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
