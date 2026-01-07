import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcv")
export default class HcvController {
  @operation({
    summary: "Get Hcv",
  })
  @get()
  static getHcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcv",
  })
  @post("{id}")
  static createHcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
