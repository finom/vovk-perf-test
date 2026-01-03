import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgts")
export default class HgtController {
  @operation({
    summary: "Get Hgts",
  })
  @get()
  static getHgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgt",
  })
  @post("{id}")
  static createHgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
