import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcas")
export default class HcaController {
  @operation({
    summary: "Get Hcas",
  })
  @get()
  static getHcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hca",
  })
  @post("{id}")
  static createHca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
