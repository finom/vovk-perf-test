import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frgs")
export default class FrgController {
  @operation({
    summary: "Get Frgs",
  })
  @get()
  static getFrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frg",
  })
  @post("{id}")
  static createFrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
