import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzm")
export default class JzmController {
  @operation({
    summary: "Get Jzm",
  })
  @get()
  static getJzm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzm",
  })
  @post("{id}")
  static createJzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
