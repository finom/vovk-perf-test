import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzf")
export default class HzfController {
  @operation({
    summary: "Get Hzf",
  })
  @get()
  static getHzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzf",
  })
  @post("{id}")
  static createHzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
