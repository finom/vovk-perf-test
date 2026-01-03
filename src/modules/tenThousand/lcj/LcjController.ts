import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcjs")
export default class LcjController {
  @operation({
    summary: "Get Lcjs",
  })
  @get()
  static getLcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcj",
  })
  @post("{id}")
  static createLcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
