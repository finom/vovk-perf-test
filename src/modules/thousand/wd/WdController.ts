import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wd")
export default class WdController {
  @operation({
    summary: "Get Wd",
  })
  @get()
  static getWd = procedure({
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
