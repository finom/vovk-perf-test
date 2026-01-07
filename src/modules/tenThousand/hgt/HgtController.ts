import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgt")
export default class HgtController {
  @operation({
    summary: "Get Hgt",
  })
  @get()
  static getHgt = procedure({
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
