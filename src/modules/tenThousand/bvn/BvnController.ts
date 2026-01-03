import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvns")
export default class BvnController {
  @operation({
    summary: "Get Bvns",
  })
  @get()
  static getBvns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvn",
  })
  @post("{id}")
  static createBvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
