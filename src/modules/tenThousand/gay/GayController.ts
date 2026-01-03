import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gays")
export default class GayController {
  @operation({
    summary: "Get Gays",
  })
  @get()
  static getGays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gay",
  })
  @post("{id}")
  static createGay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
