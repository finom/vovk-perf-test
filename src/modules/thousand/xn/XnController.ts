import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xns")
export default class XnController {
  @operation({
    summary: "Get Xns",
  })
  @get()
  static getXns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xn",
  })
  @post("{id}")
  static createXn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
