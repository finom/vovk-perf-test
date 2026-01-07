import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfk")
export default class GfkController {
  @operation({
    summary: "Get Gfk",
  })
  @get()
  static getGfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfk",
  })
  @post("{id}")
  static createGfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
