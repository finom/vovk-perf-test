import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naos")
export default class NaoController {
  @operation({
    summary: "Get Naos",
  })
  @get()
  static getNaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nao",
  })
  @post("{id}")
  static createNao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
