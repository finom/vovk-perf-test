import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwl")
export default class HwlController {
  @operation({
    summary: "Get Hwl",
  })
  @get()
  static getHwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwl",
  })
  @post("{id}")
  static createHwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
