import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqas")
export default class LqaController {
  @operation({
    summary: "Get Lqas",
  })
  @get()
  static getLqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqa",
  })
  @post("{id}")
  static createLqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
