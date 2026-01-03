import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpls")
export default class MplController {
  @operation({
    summary: "Get Mpls",
  })
  @get()
  static getMpls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpl",
  })
  @post("{id}")
  static createMpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
