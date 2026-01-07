import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkb")
export default class GkbController {
  @operation({
    summary: "Get Gkb",
  })
  @get()
  static getGkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkb",
  })
  @post("{id}")
  static createGkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
