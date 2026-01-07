import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntn")
export default class NtnController {
  @operation({
    summary: "Get Ntn",
  })
  @get()
  static getNtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntn",
  })
  @post("{id}")
  static createNtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
