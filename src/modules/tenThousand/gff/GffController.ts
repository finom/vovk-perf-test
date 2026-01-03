import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gffs")
export default class GffController {
  @operation({
    summary: "Get Gffs",
  })
  @get()
  static getGffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gff",
  })
  @post("{id}")
  static createGff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
