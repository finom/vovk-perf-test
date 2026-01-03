import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axas")
export default class AxaController {
  @operation({
    summary: "Get Axas",
  })
  @get()
  static getAxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axa",
  })
  @post("{id}")
  static createAxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
