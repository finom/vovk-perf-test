import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jots")
export default class JotController {
  @operation({
    summary: "Get Jots",
  })
  @get()
  static getJots = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jot",
  })
  @post("{id}")
  static createJot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
