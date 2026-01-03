import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awms")
export default class AwmController {
  @operation({
    summary: "Get Awms",
  })
  @get()
  static getAwms = procedure({
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
