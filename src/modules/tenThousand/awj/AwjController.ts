import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awjs")
export default class AwjController {
  @operation({
    summary: "Get Awjs",
  })
  @get()
  static getAwjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awj",
  })
  @post("{id}")
  static createAwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
