import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bws")
export default class BwsController {
  @operation({
    summary: "Get Bws",
  })
  @get()
  static getBws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bws",
  })
  @post("{id}")
  static createBws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
