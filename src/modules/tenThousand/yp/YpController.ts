import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yp")
export default class YpController {
  @operation({
    summary: "Get Yp",
  })
  @get()
  static getYp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yp",
  })
  @post("{id}")
  static createYp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
