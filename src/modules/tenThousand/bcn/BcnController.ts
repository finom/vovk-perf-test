import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcns")
export default class BcnController {
  @operation({
    summary: "Get Bcns",
  })
  @get()
  static getBcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcn",
  })
  @post("{id}")
  static createBcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
