import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xq")
export default class XqController {
  @operation({
    summary: "Get Xq",
  })
  @get()
  static getXq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xq",
  })
  @post("{id}")
  static createXq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
