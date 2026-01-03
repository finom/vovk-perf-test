import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ais")
export default class AisController {
  @operation({
    summary: "Get Ais",
  })
  @get()
  static getAis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ais",
  })
  @post("{id}")
  static createAis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
