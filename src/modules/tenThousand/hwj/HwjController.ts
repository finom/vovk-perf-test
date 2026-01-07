import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwj")
export default class HwjController {
  @operation({
    summary: "Get Hwj",
  })
  @get()
  static getHwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwj",
  })
  @post("{id}")
  static createHwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
