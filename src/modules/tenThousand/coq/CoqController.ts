import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coqs")
export default class CoqController {
  @operation({
    summary: "Get Coqs",
  })
  @get()
  static getCoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coq",
  })
  @post("{id}")
  static createCoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
