import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bch")
export default class BchController {
  @operation({
    summary: "Get Bch",
  })
  @get()
  static getBch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bch",
  })
  @post("{id}")
  static createBch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
