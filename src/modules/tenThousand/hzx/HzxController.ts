import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzx")
export default class HzxController {
  @operation({
    summary: "Get Hzx",
  })
  @get()
  static getHzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzx",
  })
  @post("{id}")
  static createHzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
