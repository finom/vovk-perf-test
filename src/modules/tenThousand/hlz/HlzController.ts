import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlz")
export default class HlzController {
  @operation({
    summary: "Get Hlz",
  })
  @get()
  static getHlz = procedure({
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
