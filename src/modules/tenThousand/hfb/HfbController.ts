import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfb")
export default class HfbController {
  @operation({
    summary: "Get Hfb",
  })
  @get()
  static getHfb = procedure({
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
