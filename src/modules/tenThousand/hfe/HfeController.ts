import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfes")
export default class HfeController {
  @operation({
    summary: "Get Hfes",
  })
  @get()
  static getHfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfe",
  })
  @post("{id}")
  static createHfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
