import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfzs")
export default class GfzController {
  @operation({
    summary: "Get Gfzs",
  })
  @get()
  static getGfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfz",
  })
  @post("{id}")
  static createGfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
