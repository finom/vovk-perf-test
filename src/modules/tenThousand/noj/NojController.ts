import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nojs")
export default class NojController {
  @operation({
    summary: "Get Nojs",
  })
  @get()
  static getNojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noj",
  })
  @post("{id}")
  static createNoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
