import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awj")
export default class AwjController {
  @operation({
    summary: "Get Awj",
  })
  @get()
  static getAwj = procedure({
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
