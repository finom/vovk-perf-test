import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zos")
export default class ZoController {
  @operation({
    summary: "Get Zos",
  })
  @get()
  static getZos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zo",
  })
  @post("{id}")
  static createZo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
