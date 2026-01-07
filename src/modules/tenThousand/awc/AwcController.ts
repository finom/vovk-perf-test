import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awc")
export default class AwcController {
  @operation({
    summary: "Get Awc",
  })
  @get()
  static getAwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awc",
  })
  @post("{id}")
  static createAwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
