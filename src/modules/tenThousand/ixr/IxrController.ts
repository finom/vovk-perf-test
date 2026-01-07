import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixr")
export default class IxrController {
  @operation({
    summary: "Get Ixr",
  })
  @get()
  static getIxr = procedure({
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
