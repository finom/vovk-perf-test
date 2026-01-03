import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wws")
export default class WwController {
  @operation({
    summary: "Get Wws",
  })
  @get()
  static getWws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ww",
  })
  @post("{id}")
  static createWw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
