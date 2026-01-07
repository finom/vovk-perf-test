import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mce")
export default class MceController {
  @operation({
    summary: "Get Mce",
  })
  @get()
  static getMce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mce",
  })
  @post("{id}")
  static createMce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
