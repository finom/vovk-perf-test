import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cas")
export default class CaController {
  @operation({
    summary: "Get Cas",
  })
  @get()
  static getCas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ca",
  })
  @post("{id}")
  static createCa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
