import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awzs")
export default class AwzController {
  @operation({
    summary: "Get Awzs",
  })
  @get()
  static getAwzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awz",
  })
  @post("{id}")
  static createAwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
