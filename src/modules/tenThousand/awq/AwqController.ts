import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awqs")
export default class AwqController {
  @operation({
    summary: "Get Awqs",
  })
  @get()
  static getAwqs = procedure({
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
