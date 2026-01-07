import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hao")
export default class HaoController {
  @operation({
    summary: "Get Hao",
  })
  @get()
  static getHao = procedure({
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
