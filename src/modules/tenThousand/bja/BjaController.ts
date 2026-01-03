import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjas")
export default class BjaController {
  @operation({
    summary: "Get Bjas",
  })
  @get()
  static getBjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bja",
  })
  @post("{id}")
  static createBja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
