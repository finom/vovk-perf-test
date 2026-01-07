import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yw")
export default class YwController {
  @operation({
    summary: "Get Yw",
  })
  @get()
  static getYw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yw",
  })
  @post("{id}")
  static createYw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
