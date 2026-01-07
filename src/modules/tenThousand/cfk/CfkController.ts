import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfk")
export default class CfkController {
  @operation({
    summary: "Get Cfk",
  })
  @get()
  static getCfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfk",
  })
  @post("{id}")
  static createCfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
