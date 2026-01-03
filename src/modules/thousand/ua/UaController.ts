import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uas")
export default class UaController {
  @operation({
    summary: "Get Uas",
  })
  @get()
  static getUas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ua",
  })
  @post("{id}")
  static createUa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
