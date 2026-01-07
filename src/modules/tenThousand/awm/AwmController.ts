import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awm")
export default class AwmController {
  @operation({
    summary: "Get Awm",
  })
  @get()
  static getAwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awm",
  })
  @post("{id}")
  static createAwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
