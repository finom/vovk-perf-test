import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flzs")
export default class FlzController {
  @operation({
    summary: "Get Flzs",
  })
  @get()
  static getFlzs = procedure({
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
