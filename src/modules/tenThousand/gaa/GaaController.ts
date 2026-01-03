import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaas")
export default class GaaController {
  @operation({
    summary: "Get Gaas",
  })
  @get()
  static getGaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gaa",
  })
  @post("{id}")
  static createGaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
