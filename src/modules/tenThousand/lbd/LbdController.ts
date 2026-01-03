import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbds")
export default class LbdController {
  @operation({
    summary: "Get Lbds",
  })
  @get()
  static getLbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbd",
  })
  @post("{id}")
  static createLbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
