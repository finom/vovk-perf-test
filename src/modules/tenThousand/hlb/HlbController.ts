import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlb")
export default class HlbController {
  @operation({
    summary: "Get Hlb",
  })
  @get()
  static getHlb = procedure({
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
