import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gww")
export default class GwwController {
  @operation({
    summary: "Get Gww",
  })
  @get()
  static getGww = procedure({
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
