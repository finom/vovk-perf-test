import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xis")
export default class XiController {
  @operation({
    summary: "Get Xis",
  })
  @get()
  static getXis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xi",
  })
  @post("{id}")
  static createXi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
