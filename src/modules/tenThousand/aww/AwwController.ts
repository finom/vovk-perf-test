import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aww")
export default class AwwController {
  @operation({
    summary: "Get Aww",
  })
  @get()
  static getAww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aww",
  })
  @post("{id}")
  static createAww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
