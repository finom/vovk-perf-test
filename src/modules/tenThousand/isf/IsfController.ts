import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isf")
export default class IsfController {
  @operation({
    summary: "Get Isf",
  })
  @get()
  static getIsf = procedure({
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
