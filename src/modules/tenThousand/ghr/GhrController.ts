import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghrs")
export default class GhrController {
  @operation({
    summary: "Get Ghrs",
  })
  @get()
  static getGhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghr",
  })
  @post("{id}")
  static createGhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
