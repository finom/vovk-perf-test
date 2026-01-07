import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flz")
export default class FlzController {
  @operation({
    summary: "Get Flz",
  })
  @get()
  static getFlz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flz",
  })
  @post("{id}")
  static createFlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
