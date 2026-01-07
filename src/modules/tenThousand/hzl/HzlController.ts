import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzl")
export default class HzlController {
  @operation({
    summary: "Get Hzl",
  })
  @get()
  static getHzl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzl",
  })
  @post("{id}")
  static createHzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
