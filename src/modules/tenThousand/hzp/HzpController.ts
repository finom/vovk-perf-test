import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzps")
export default class HzpController {
  @operation({
    summary: "Get Hzps",
  })
  @get()
  static getHzps = procedure({
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
