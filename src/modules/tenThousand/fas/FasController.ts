import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fas")
export default class FasController {
  @operation({
    summary: "Get Fas",
  })
  @get()
  static getFas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fas",
  })
  @post("{id}")
  static createFas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
