import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbd")
export default class LbdController {
  @operation({
    summary: "Get Lbd",
  })
  @get()
  static getLbd = procedure({
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
