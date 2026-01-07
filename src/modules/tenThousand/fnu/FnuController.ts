import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnu")
export default class FnuController {
  @operation({
    summary: "Get Fnu",
  })
  @get()
  static getFnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnu",
  })
  @post("{id}")
  static createFnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
