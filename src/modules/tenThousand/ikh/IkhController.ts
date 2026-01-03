import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikhs")
export default class IkhController {
  @operation({
    summary: "Get Ikhs",
  })
  @get()
  static getIkhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikh",
  })
  @post("{id}")
  static createIkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
