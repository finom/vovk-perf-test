import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzk")
export default class GzkController {
  @operation({
    summary: "Get Gzk",
  })
  @get()
  static getGzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzk",
  })
  @post("{id}")
  static createGzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
