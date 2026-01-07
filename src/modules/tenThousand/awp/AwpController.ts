import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awp")
export default class AwpController {
  @operation({
    summary: "Get Awp",
  })
  @get()
  static getAwp = procedure({
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
