import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcvs")
export default class HcvController {
  @operation({
    summary: "Get Hcvs",
  })
  @get()
  static getHcvs = procedure({
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
