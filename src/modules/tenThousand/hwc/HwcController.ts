import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwcs")
export default class HwcController {
  @operation({
    summary: "Get Hwcs",
  })
  @get()
  static getHwcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwc",
  })
  @post("{id}")
  static createHwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
