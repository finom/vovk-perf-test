import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnu")
export default class LnuController {
  @operation({
    summary: "Get Lnu",
  })
  @get()
  static getLnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnu",
  })
  @post("{id}")
  static createLnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
