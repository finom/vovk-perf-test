import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bop")
export default class BopController {
  @operation({
    summary: "Get Bop",
  })
  @get()
  static getBop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bop",
  })
  @post("{id}")
  static createBop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
