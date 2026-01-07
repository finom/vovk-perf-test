import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuo")
export default class CuoController {
  @operation({
    summary: "Get Cuo",
  })
  @get()
  static getCuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuo",
  })
  @post("{id}")
  static createCuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
