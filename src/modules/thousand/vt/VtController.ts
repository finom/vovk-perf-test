import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vts")
export default class VtController {
  @operation({
    summary: "Get Vts",
  })
  @get()
  static getVts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vt",
  })
  @post("{id}")
  static createVt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
