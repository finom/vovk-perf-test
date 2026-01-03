import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvxes")
export default class FvxController {
  @operation({
    summary: "Get Fvxes",
  })
  @get()
  static getFvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvx",
  })
  @post("{id}")
  static createFvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
