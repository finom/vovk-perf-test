import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsos")
export default class NsoController {
  @operation({
    summary: "Get Nsos",
  })
  @get()
  static getNsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nso",
  })
  @post("{id}")
  static createNso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
