import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzrs")
export default class HzrController {
  @operation({
    summary: "Get Hzrs",
  })
  @get()
  static getHzrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzr",
  })
  @post("{id}")
  static createHzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
