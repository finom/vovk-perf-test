import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mas")
export default class MaController {
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
    summary: "Create Ma",
  })
  @post("{id}")
  static createMa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
