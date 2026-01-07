import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aso")
export default class AsoController {
  @operation({
    summary: "Get Aso",
  })
  @get()
  static getAso = procedure({
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
