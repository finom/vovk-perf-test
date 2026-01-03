import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caos")
export default class CaoController {
  @operation({
    summary: "Get Caos",
  })
  @get()
  static getCaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cao",
  })
  @post("{id}")
  static createCao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
