import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lli")
export default class LliController {
  @operation({
    summary: "Get Lli",
  })
  @get()
  static getLli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lli",
  })
  @post("{id}")
  static createLli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
