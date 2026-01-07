import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xj")
export default class XjController {
  @operation({
    summary: "Get Xj",
  })
  @get()
  static getXj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xj",
  })
  @post("{id}")
  static createXj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
