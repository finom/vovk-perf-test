import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlzs")
export default class HlzController {
  @operation({
    summary: "Get Hlzs",
  })
  @get()
  static getHlzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlz",
  })
  @post("{id}")
  static createHlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
