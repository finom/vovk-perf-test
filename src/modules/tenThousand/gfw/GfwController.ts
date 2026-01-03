import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfws")
export default class GfwController {
  @operation({
    summary: "Get Gfws",
  })
  @get()
  static getGfws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfw",
  })
  @post("{id}")
  static createGfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
