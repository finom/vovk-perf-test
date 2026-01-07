import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvn")
export default class BvnController {
  @operation({
    summary: "Get Bvn",
  })
  @get()
  static getBvn = procedure({
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
