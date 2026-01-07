import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbl")
export default class FblController {
  @operation({
    summary: "Get Fbl",
  })
  @get()
  static getFbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbl",
  })
  @post("{id}")
  static createFbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
