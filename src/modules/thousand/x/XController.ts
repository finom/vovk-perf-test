import { procedure, prefix, get, post, operation } from "vovk";

@prefix("x")
export default class XController {
  @operation({
    summary: "Get X",
  })
  @get()
  static getX = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create X",
  })
  @post("{id}")
  static createX = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
