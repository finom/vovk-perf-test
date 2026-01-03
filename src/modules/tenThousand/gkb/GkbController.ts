import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkbs")
export default class GkbController {
  @operation({
    summary: "Get Gkbs",
  })
  @get()
  static getGkbs = procedure({
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
