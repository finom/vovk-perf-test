import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sos")
export default class SoController {
  @operation({
    summary: "Get Sos",
  })
  @get()
  static getSos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create So",
  })
  @post("{id}")
  static createSo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
