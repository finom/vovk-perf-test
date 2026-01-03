import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baks")
export default class BakController {
  @operation({
    summary: "Get Baks",
  })
  @get()
  static getBaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bak",
  })
  @post("{id}")
  static createBak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
