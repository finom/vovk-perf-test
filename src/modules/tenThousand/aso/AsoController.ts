import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asos")
export default class AsoController {
  @operation({
    summary: "Get Asos",
  })
  @get()
  static getAsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aso",
  })
  @post("{id}")
  static createAso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
