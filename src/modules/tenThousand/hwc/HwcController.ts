import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwc")
export default class HwcController {
  @operation({
    summary: "Get Hwc",
  })
  @get()
  static getHwc = procedure({
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
