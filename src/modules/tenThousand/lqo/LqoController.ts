import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqos")
export default class LqoController {
  @operation({
    summary: "Get Lqos",
  })
  @get()
  static getLqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqo",
  })
  @post("{id}")
  static createLqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
