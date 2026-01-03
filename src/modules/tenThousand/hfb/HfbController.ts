import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfbs")
export default class HfbController {
  @operation({
    summary: "Get Hfbs",
  })
  @get()
  static getHfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfb",
  })
  @post("{id}")
  static createHfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
