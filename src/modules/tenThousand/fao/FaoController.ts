import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faos")
export default class FaoController {
  @operation({
    summary: "Get Faos",
  })
  @get()
  static getFaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fao",
  })
  @post("{id}")
  static createFao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
