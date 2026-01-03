import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkts")
export default class JktController {
  @operation({
    summary: "Get Jkts",
  })
  @get()
  static getJkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkt",
  })
  @post("{id}")
  static createJkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
