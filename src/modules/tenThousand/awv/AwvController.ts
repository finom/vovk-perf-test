import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awvs")
export default class AwvController {
  @operation({
    summary: "Get Awvs",
  })
  @get()
  static getAwvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awv",
  })
  @post("{id}")
  static createAwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
