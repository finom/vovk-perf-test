import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxk")
export default class GxkController {
  @operation({
    summary: "Get Gxk",
  })
  @get()
  static getGxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxk",
  })
  @post("{id}")
  static createGxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
