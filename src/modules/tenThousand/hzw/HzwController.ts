import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzws")
export default class HzwController {
  @operation({
    summary: "Get Hzws",
  })
  @get()
  static getHzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzw",
  })
  @post("{id}")
  static createHzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
