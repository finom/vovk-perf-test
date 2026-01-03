import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cks")
export default class CksController {
  @operation({
    summary: "Get Cks",
  })
  @get()
  static getCks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cks",
  })
  @post("{id}")
  static createCks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
