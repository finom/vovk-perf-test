import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpo")
export default class BpoController {
  @operation({
    summary: "Get Bpo",
  })
  @get()
  static getBpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpo",
  })
  @post("{id}")
  static createBpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
