import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvy")
export default class HvyController {
  @operation({
    summary: "Get Hvy",
  })
  @get()
  static getHvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvy",
  })
  @post("{id}")
  static createHvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
