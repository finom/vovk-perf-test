import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lczs")
export default class LczController {
  @operation({
    summary: "Get Lczs",
  })
  @get()
  static getLczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcz",
  })
  @post("{id}")
  static createLcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
