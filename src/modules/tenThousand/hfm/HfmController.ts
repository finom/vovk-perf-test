import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfm")
export default class HfmController {
  @operation({
    summary: "Get Hfm",
  })
  @get()
  static getHfm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfm",
  })
  @post("{id}")
  static createHfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
