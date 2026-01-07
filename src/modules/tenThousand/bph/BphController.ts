import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bph")
export default class BphController {
  @operation({
    summary: "Get Bph",
  })
  @get()
  static getBph = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bph",
  })
  @post("{id}")
  static createBph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
