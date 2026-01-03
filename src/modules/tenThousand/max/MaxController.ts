import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maxes")
export default class MaxController {
  @operation({
    summary: "Get Maxes",
  })
  @get()
  static getMaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Max",
  })
  @post("{id}")
  static createMax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
