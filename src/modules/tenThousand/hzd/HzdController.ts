import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzd")
export default class HzdController {
  @operation({
    summary: "Get Hzd",
  })
  @get()
  static getHzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzd",
  })
  @post("{id}")
  static createHzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
