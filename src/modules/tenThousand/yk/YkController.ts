import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yks")
export default class YkController {
  @operation({
    summary: "Get Yks",
  })
  @get()
  static getYks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yk",
  })
  @post("{id}")
  static createYk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
