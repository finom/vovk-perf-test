import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrxes")
export default class LrxController {
  @operation({
    summary: "Get Lrxes",
  })
  @get()
  static getLrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrx",
  })
  @post("{id}")
  static createLrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
