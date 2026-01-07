import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awq")
export default class AwqController {
  @operation({
    summary: "Get Awq",
  })
  @get()
  static getAwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awq",
  })
  @post("{id}")
  static createAwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
