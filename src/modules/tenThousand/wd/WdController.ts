import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wds")
export default class WdController {
  @operation({
    summary: "Get Wds",
  })
  @get()
  static getWds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wd",
  })
  @post("{id}")
  static createWd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
