import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwqs")
export default class HwqController {
  @operation({
    summary: "Get Hwqs",
  })
  @get()
  static getHwqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwq",
  })
  @post("{id}")
  static createHwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
