import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awps")
export default class AwpController {
  @operation({
    summary: "Get Awps",
  })
  @get()
  static getAwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awp",
  })
  @post("{id}")
  static createAwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
