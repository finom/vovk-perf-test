import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zs")
export default class ZsController {
  @operation({
    summary: "Get Zs",
  })
  @get()
  static getZs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zs",
  })
  @post("{id}")
  static createZs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
