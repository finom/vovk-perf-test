import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwv")
export default class HwvController {
  @operation({
    summary: "Get Hwv",
  })
  @get()
  static getHwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwv",
  })
  @post("{id}")
  static createHwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
