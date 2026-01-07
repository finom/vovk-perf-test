import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmd")
export default class LmdController {
  @operation({
    summary: "Get Lmd",
  })
  @get()
  static getLmd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmd",
  })
  @post("{id}")
  static createLmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
