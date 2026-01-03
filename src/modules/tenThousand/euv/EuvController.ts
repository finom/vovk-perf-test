import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euvs")
export default class EuvController {
  @operation({
    summary: "Get Euvs",
  })
  @get()
  static getEuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euv",
  })
  @post("{id}")
  static createEuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
