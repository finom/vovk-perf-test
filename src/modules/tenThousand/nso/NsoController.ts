import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nso")
export default class NsoController {
  @operation({
    summary: "Get Nso",
  })
  @get()
  static getNso = procedure({
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
