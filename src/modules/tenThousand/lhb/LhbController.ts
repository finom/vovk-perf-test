import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhbs")
export default class LhbController {
  @operation({
    summary: "Get Lhbs",
  })
  @get()
  static getLhbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhb",
  })
  @post("{id}")
  static createLhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
