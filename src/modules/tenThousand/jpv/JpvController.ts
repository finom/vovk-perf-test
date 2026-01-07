import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpv")
export default class JpvController {
  @operation({
    summary: "Get Jpv",
  })
  @get()
  static getJpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpv",
  })
  @post("{id}")
  static createJpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
