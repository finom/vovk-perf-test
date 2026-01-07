import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nao")
export default class NaoController {
  @operation({
    summary: "Get Nao",
  })
  @get()
  static getNao = procedure({
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
