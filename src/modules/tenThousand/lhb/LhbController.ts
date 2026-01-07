import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhb")
export default class LhbController {
  @operation({
    summary: "Get Lhb",
  })
  @get()
  static getLhb = procedure({
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
