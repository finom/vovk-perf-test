import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwg")
export default class HwgController {
  @operation({
    summary: "Get Hwg",
  })
  @get()
  static getHwg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwg",
  })
  @post("{id}")
  static createHwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
