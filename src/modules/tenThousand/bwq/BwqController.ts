import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwq")
export default class BwqController {
  @operation({
    summary: "Get Bwq",
  })
  @get()
  static getBwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwq",
  })
  @post("{id}")
  static createBwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
