import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cws")
export default class CwsController {
  @operation({
    summary: "Get Cws",
  })
  @get()
  static getCws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cws",
  })
  @post("{id}")
  static createCws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
