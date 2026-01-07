import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnd")
export default class LndController {
  @operation({
    summary: "Get Lnd",
  })
  @get()
  static getLnd = procedure({
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
