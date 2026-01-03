import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isfs")
export default class IsfController {
  @operation({
    summary: "Get Isfs",
  })
  @get()
  static getIsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isf",
  })
  @post("{id}")
  static createIsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
