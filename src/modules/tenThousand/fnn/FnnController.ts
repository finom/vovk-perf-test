import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnns")
export default class FnnController {
  @operation({
    summary: "Get Fnns",
  })
  @get()
  static getFnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnn",
  })
  @post("{id}")
  static createFnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
