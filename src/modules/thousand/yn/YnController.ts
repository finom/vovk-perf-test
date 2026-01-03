import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yns")
export default class YnController {
  @operation({
    summary: "Get Yns",
  })
  @get()
  static getYns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yn",
  })
  @post("{id}")
  static createYn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
