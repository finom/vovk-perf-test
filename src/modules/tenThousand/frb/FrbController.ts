import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frb")
export default class FrbController {
  @operation({
    summary: "Get Frb",
  })
  @get()
  static getFrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frb",
  })
  @post("{id}")
  static createFrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
