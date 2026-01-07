import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lg")
export default class LgController {
  @operation({
    summary: "Get Lg",
  })
  @get()
  static getLg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lg",
  })
  @post("{id}")
  static createLg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
