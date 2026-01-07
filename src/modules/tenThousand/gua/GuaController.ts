import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gua")
export default class GuaController {
  @operation({
    summary: "Get Gua",
  })
  @get()
  static getGua = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gua",
  })
  @post("{id}")
  static createGua = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
