import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awbs")
export default class AwbController {
  @operation({
    summary: "Get Awbs",
  })
  @get()
  static getAwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awb",
  })
  @post("{id}")
  static createAwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
