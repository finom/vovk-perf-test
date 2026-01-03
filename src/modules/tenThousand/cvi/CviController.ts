import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvis")
export default class CviController {
  @operation({
    summary: "Get Cvis",
  })
  @get()
  static getCvis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvi",
  })
  @post("{id}")
  static createCvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
