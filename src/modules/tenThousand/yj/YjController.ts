import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yj")
export default class YjController {
  @operation({
    summary: "Get Yj",
  })
  @get()
  static getYj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yj",
  })
  @post("{id}")
  static createYj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
