import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpas")
export default class FpaController {
  @operation({
    summary: "Get Fpas",
  })
  @get()
  static getFpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpa",
  })
  @post("{id}")
  static createFpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
