import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yhs")
export default class YhController {
  @operation({
    summary: "Get Yhs",
  })
  @get()
  static getYhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yh",
  })
  @post("{id}")
  static createYh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
