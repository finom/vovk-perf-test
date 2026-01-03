import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eens")
export default class EenController {
  @operation({
    summary: "Get Eens",
  })
  @get()
  static getEens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Een",
  })
  @post("{id}")
  static createEen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
