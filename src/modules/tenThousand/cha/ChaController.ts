import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chas")
export default class ChaController {
  @operation({
    summary: "Get Chas",
  })
  @get()
  static getChas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cha",
  })
  @post("{id}")
  static createCha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
