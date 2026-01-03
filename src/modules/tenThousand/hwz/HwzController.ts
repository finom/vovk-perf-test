import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwzs")
export default class HwzController {
  @operation({
    summary: "Get Hwzs",
  })
  @get()
  static getHwzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwz",
  })
  @post("{id}")
  static createHwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
