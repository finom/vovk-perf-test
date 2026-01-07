import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrx")
export default class LrxController {
  @operation({
    summary: "Get Lrx",
  })
  @get()
  static getLrx = procedure({
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
