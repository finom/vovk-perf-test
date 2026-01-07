import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwv")
export default class GwvController {
  @operation({
    summary: "Get Gwv",
  })
  @get()
  static getGwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwv",
  })
  @post("{id}")
  static createGwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
