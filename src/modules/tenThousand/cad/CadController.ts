import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cad")
export default class CadController {
  @operation({
    summary: "Get Cad",
  })
  @get()
  static getCad = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cad",
  })
  @post("{id}")
  static createCad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
