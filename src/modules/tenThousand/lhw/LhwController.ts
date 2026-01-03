import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhws")
export default class LhwController {
  @operation({
    summary: "Get Lhws",
  })
  @get()
  static getLhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhw",
  })
  @post("{id}")
  static createLhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
