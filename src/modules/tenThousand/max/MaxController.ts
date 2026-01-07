import { procedure, prefix, get, post, operation } from "vovk";

@prefix("max")
export default class MaxController {
  @operation({
    summary: "Get Max",
  })
  @get()
  static getMax = procedure({
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
