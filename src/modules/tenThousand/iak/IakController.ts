import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iak")
export default class IakController {
  @operation({
    summary: "Get Iak",
  })
  @get()
  static getIak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iak",
  })
  @post("{id}")
  static createIak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
