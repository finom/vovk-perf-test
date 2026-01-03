import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iws")
export default class IwController {
  @operation({
    summary: "Get Iws",
  })
  @get()
  static getIws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iw",
  })
  @post("{id}")
  static createIw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
