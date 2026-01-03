import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwes")
export default class BweController {
  @operation({
    summary: "Get Bwes",
  })
  @get()
  static getBwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwe",
  })
  @post("{id}")
  static createBwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
