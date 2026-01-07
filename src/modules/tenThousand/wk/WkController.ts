import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wk")
export default class WkController {
  @operation({
    summary: "Get Wk",
  })
  @get()
  static getWk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wk",
  })
  @post("{id}")
  static createWk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
