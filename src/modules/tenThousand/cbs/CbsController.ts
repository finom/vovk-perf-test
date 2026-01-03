import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbs")
export default class CbsController {
  @operation({
    summary: "Get Cbs",
  })
  @get()
  static getCbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbs",
  })
  @post("{id}")
  static createCbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
