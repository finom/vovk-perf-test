import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxus")
export default class MxuController {
  @operation({
    summary: "Get Mxus",
  })
  @get()
  static getMxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxu",
  })
  @post("{id}")
  static createMxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
