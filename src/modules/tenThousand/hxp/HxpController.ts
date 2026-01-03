import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxps")
export default class HxpController {
  @operation({
    summary: "Get Hxps",
  })
  @get()
  static getHxps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxp",
  })
  @post("{id}")
  static createHxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
