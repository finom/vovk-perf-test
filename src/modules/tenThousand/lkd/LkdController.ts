import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkd")
export default class LkdController {
  @operation({
    summary: "Get Lkd",
  })
  @get()
  static getLkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkd",
  })
  @post("{id}")
  static createLkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
