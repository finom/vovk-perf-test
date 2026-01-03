import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bops")
export default class BopController {
  @operation({
    summary: "Get Bops",
  })
  @get()
  static getBops = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bop",
  })
  @post("{id}")
  static createBop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
