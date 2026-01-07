import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aao")
export default class AaoController {
  @operation({
    summary: "Get Aao",
  })
  @get()
  static getAao = procedure({
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
