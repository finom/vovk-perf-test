import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpo")
export default class LpoController {
  @operation({
    summary: "Get Lpo",
  })
  @get()
  static getLpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpo",
  })
  @post("{id}")
  static createLpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
