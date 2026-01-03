import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awds")
export default class AwdController {
  @operation({
    summary: "Get Awds",
  })
  @get()
  static getAwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awd",
  })
  @post("{id}")
  static createAwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
