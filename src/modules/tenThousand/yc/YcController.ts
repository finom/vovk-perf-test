import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yc")
export default class YcController {
  @operation({
    summary: "Get Yc",
  })
  @get()
  static getYc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yc",
  })
  @post("{id}")
  static createYc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
