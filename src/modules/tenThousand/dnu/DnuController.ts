import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnus")
export default class DnuController {
  @operation({
    summary: "Get Dnus",
  })
  @get()
  static getDnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnu",
  })
  @post("{id}")
  static createDnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
