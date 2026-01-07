import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yk")
export default class YkController {
  @operation({
    summary: "Get Yk",
  })
  @get()
  static getYk = procedure({
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
