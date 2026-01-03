import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frts")
export default class FrtController {
  @operation({
    summary: "Get Frts",
  })
  @get()
  static getFrts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frt",
  })
  @post("{id}")
  static createFrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
