import { procedure, prefix, get, post, operation } from "vovk";

@prefix("els")
export default class ElsController {
  @operation({
    summary: "Get Els",
  })
  @get()
  static getEls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Els",
  })
  @post("{id}")
  static createEls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
