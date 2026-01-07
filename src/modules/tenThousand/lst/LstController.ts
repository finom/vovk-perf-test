import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lst")
export default class LstController {
  @operation({
    summary: "Get Lst",
  })
  @get()
  static getLst = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lst",
  })
  @post("{id}")
  static createLst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
