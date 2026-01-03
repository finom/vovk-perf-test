import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foms")
export default class FomController {
  @operation({
    summary: "Get Foms",
  })
  @get()
  static getFoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fom",
  })
  @post("{id}")
  static createFom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
