import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnu")
export default class DnuController {
  @operation({
    summary: "Get Dnu",
  })
  @get()
  static getDnu = procedure({
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
