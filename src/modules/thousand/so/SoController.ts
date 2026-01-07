import { procedure, prefix, get, post, operation } from "vovk";

@prefix("so")
export default class SoController {
  @operation({
    summary: "Get So",
  })
  @get()
  static getSo = procedure({
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
