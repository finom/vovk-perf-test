import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwps")
export default class HwpController {
  @operation({
    summary: "Get Hwps",
  })
  @get()
  static getHwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwp",
  })
  @post("{id}")
  static createHwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
