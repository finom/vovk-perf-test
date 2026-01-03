import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pas")
export default class PaController {
  @operation({
    summary: "Get Pas",
  })
  @get()
  static getPas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pa",
  })
  @post("{id}")
  static createPa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
