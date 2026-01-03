import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfqs")
export default class GfqController {
  @operation({
    summary: "Get Gfqs",
  })
  @get()
  static getGfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfq",
  })
  @post("{id}")
  static createGfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
