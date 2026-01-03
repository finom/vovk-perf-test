import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjjs")
export default class HjjController {
  @operation({
    summary: "Get Hjjs",
  })
  @get()
  static getHjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjj",
  })
  @post("{id}")
  static createHjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
