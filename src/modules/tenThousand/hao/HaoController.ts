import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haos")
export default class HaoController {
  @operation({
    summary: "Get Haos",
  })
  @get()
  static getHaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hao",
  })
  @post("{id}")
  static createHao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
