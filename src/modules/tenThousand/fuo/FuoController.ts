import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuo")
export default class FuoController {
  @operation({
    summary: "Get Fuo",
  })
  @get()
  static getFuo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuo",
  })
  @post("{id}")
  static createFuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
