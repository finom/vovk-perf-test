import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mas")
export default class MasController {
  @operation({
    summary: "Get Mas",
  })
  @get()
  static getMas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mas",
  })
  @post("{id}")
  static createMas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
