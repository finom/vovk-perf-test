import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfh")
export default class GfhController {
  @operation({
    summary: "Get Gfh",
  })
  @get()
  static getGfh = procedure({
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
