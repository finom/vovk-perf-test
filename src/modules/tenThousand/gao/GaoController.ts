import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaos")
export default class GaoController {
  @operation({
    summary: "Get Gaos",
  })
  @get()
  static getGaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gao",
  })
  @post("{id}")
  static createGao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
