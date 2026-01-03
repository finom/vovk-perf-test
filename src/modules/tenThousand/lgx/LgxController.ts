import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgxes")
export default class LgxController {
  @operation({
    summary: "Get Lgxes",
  })
  @get()
  static getLgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgx",
  })
  @post("{id}")
  static createLgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
