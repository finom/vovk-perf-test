import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxies")
export default class HxyController {
  @operation({
    summary: "Get Hxies",
  })
  @get()
  static getHxies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxy",
  })
  @post("{id}")
  static createHxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
