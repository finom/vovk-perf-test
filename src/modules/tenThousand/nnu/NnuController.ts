import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnu")
export default class NnuController {
  @operation({
    summary: "Get Nnu",
  })
  @get()
  static getNnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnu",
  })
  @post("{id}")
  static createNnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
