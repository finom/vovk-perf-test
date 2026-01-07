import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fel")
export default class FelController {
  @operation({
    summary: "Get Fel",
  })
  @get()
  static getFel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fel",
  })
  @post("{id}")
  static createFel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
