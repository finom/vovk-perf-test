import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfp")
export default class HfpController {
  @operation({
    summary: "Get Hfp",
  })
  @get()
  static getHfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfp",
  })
  @post("{id}")
  static createHfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
