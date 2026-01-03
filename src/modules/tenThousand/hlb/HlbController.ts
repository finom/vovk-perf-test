import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlbs")
export default class HlbController {
  @operation({
    summary: "Get Hlbs",
  })
  @get()
  static getHlbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlb",
  })
  @post("{id}")
  static createHlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
