import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gres")
export default class GreController {
  @operation({
    summary: "Get Gres",
  })
  @get()
  static getGres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gre",
  })
  @post("{id}")
  static createGre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
