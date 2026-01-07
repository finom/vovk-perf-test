import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwu")
export default class HwuController {
  @operation({
    summary: "Get Hwu",
  })
  @get()
  static getHwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwu",
  })
  @post("{id}")
  static createHwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
