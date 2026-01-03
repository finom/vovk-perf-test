import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xies")
export default class XyController {
  @operation({
    summary: "Get Xies",
  })
  @get()
  static getXies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xy",
  })
  @post("{id}")
  static createXy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
