import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzfs")
export default class HzfController {
  @operation({
    summary: "Get Hzfs",
  })
  @get()
  static getHzfs = procedure({
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
