import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcas")
export default class FcaController {
  @operation({
    summary: "Get Fcas",
  })
  @get()
  static getFcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fca",
  })
  @post("{id}")
  static createFca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
