import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xk")
export default class XkController {
  @operation({
    summary: "Get Xk",
  })
  @get()
  static getXk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xk",
  })
  @post("{id}")
  static createXk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
