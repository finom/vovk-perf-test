import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixrs")
export default class IxrController {
  @operation({
    summary: "Get Ixrs",
  })
  @get()
  static getIxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixr",
  })
  @post("{id}")
  static createIxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
