import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaos")
export default class AaoController {
  @operation({
    summary: "Get Aaos",
  })
  @get()
  static getAaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aao",
  })
  @post("{id}")
  static createAao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
