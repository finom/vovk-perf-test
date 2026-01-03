import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwxes")
export default class HwxController {
  @operation({
    summary: "Get Hwxes",
  })
  @get()
  static getHwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwx",
  })
  @post("{id}")
  static createHwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
