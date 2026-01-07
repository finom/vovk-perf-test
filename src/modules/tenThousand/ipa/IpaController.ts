import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipa")
export default class IpaController {
  @operation({
    summary: "Get Ipa",
  })
  @get()
  static getIpa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipa",
  })
  @post("{id}")
  static createIpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
