import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwws")
export default class GwwController {
  @operation({
    summary: "Get Gwws",
  })
  @get()
  static getGwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gww",
  })
  @post("{id}")
  static createGww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
