import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzw")
export default class HzwController {
  @operation({
    summary: "Get Hzw",
  })
  @get()
  static getHzw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzw",
  })
  @post("{id}")
  static createHzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
