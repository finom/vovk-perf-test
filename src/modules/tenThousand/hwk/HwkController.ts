import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwk")
export default class HwkController {
  @operation({
    summary: "Get Hwk",
  })
  @get()
  static getHwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwk",
  })
  @post("{id}")
  static createHwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
