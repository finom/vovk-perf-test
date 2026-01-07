import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzp")
export default class HzpController {
  @operation({
    summary: "Get Hzp",
  })
  @get()
  static getHzp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzp",
  })
  @post("{id}")
  static createHzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
