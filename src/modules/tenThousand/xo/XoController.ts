import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xos")
export default class XoController {
  @operation({
    summary: "Get Xos",
  })
  @get()
  static getXos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xo",
  })
  @post("{id}")
  static createXo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
