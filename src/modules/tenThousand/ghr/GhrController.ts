import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghr")
export default class GhrController {
  @operation({
    summary: "Get Ghr",
  })
  @get()
  static getGhr = procedure({
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
