import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbds")
export default class BbdController {
  @operation({
    summary: "Get Bbds",
  })
  @get()
  static getBbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbd",
  })
  @post("{id}")
  static createBbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
