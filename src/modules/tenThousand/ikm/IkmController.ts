import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikm")
export default class IkmController {
  @operation({
    summary: "Get Ikm",
  })
  @get()
  static getIkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikm",
  })
  @post("{id}")
  static createIkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
