import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoes")
export default class AoeController {
  @operation({
    summary: "Get Aoes",
  })
  @get()
  static getAoes = procedure({
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
