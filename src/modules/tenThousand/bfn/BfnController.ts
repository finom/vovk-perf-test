import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfn")
export default class BfnController {
  @operation({
    summary: "Get Bfn",
  })
  @get()
  static getBfn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfn",
  })
  @post("{id}")
  static createBfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
