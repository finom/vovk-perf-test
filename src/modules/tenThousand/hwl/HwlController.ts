import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwls")
export default class HwlController {
  @operation({
    summary: "Get Hwls",
  })
  @get()
  static getHwls = procedure({
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
