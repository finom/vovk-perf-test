import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnds")
export default class LndController {
  @operation({
    summary: "Get Lnds",
  })
  @get()
  static getLnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnd",
  })
  @post("{id}")
  static createLnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
