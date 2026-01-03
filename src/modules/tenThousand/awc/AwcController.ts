import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awcs")
export default class AwcController {
  @operation({
    summary: "Get Awcs",
  })
  @get()
  static getAwcs = procedure({
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
