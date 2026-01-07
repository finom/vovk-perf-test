import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vt")
export default class VtController {
  @operation({
    summary: "Get Vt",
  })
  @get()
  static getVt = procedure({
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
