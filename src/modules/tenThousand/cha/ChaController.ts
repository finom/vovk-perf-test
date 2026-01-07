import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cha")
export default class ChaController {
  @operation({
    summary: "Get Cha",
  })
  @get()
  static getCha = procedure({
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
