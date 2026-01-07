import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kti")
export default class KtiController {
  @operation({
    summary: "Get Kti",
  })
  @get()
  static getKti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kti",
  })
  @post("{id}")
  static createKti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
