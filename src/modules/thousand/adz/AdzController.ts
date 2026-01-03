import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adzs")
export default class AdzController {
  @operation({
    summary: "Get Adzs",
  })
  @get()
  static getAdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adz",
  })
  @post("{id}")
  static createAdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
