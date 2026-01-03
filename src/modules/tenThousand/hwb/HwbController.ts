import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwbs")
export default class HwbController {
  @operation({
    summary: "Get Hwbs",
  })
  @get()
  static getHwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwb",
  })
  @post("{id}")
  static createHwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
