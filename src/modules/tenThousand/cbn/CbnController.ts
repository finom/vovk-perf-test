import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbn")
export default class CbnController {
  @operation({
    summary: "Get Cbn",
  })
  @get()
  static getCbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbn",
  })
  @post("{id}")
  static createCbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
