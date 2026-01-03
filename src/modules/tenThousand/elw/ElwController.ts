import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elws")
export default class ElwController {
  @operation({
    summary: "Get Elws",
  })
  @get()
  static getElws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elw",
  })
  @post("{id}")
  static createElw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
