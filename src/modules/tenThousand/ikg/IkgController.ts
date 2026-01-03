import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikgs")
export default class IkgController {
  @operation({
    summary: "Get Ikgs",
  })
  @get()
  static getIkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikg",
  })
  @post("{id}")
  static createIkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
