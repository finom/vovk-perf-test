import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoe")
export default class AoeController {
  @operation({
    summary: "Get Aoe",
  })
  @get()
  static getAoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoe",
  })
  @post("{id}")
  static createAoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
