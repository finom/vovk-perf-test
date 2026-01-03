import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfhs")
export default class GfhController {
  @operation({
    summary: "Get Gfhs",
  })
  @get()
  static getGfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfh",
  })
  @post("{id}")
  static createGfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
