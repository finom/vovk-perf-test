import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aex")
export default class AexController {
  @operation({
    summary: "Get Aex",
  })
  @get()
  static getAex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aex",
  })
  @post("{id}")
  static createAex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
