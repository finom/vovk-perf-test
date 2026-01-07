import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mao")
export default class MaoController {
  @operation({
    summary: "Get Mao",
  })
  @get()
  static getMao = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mao",
  })
  @post("{id}")
  static createMao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
