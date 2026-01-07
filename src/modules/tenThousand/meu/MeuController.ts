import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meu")
export default class MeuController {
  @operation({
    summary: "Get Meu",
  })
  @get()
  static getMeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meu",
  })
  @post("{id}")
  static createMeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
