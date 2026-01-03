import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvies")
export default class HvyController {
  @operation({
    summary: "Get Hvies",
  })
  @get()
  static getHvies = procedure({
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
