import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lses")
export default class LseController {
  @operation({
    summary: "Get Lses",
  })
  @get()
  static getLses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lse",
  })
  @post("{id}")
  static createLse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
