import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awxes")
export default class AwxController {
  @operation({
    summary: "Get Awxes",
  })
  @get()
  static getAwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awx",
  })
  @post("{id}")
  static createAwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
