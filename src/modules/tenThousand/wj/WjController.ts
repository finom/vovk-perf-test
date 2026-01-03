import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wjs")
export default class WjController {
  @operation({
    summary: "Get Wjs",
  })
  @get()
  static getWjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wj",
  })
  @post("{id}")
  static createWj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
