import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caas")
export default class CaaController {
  @operation({
    summary: "Get Caas",
  })
  @get()
  static getCaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caa",
  })
  @post("{id}")
  static createCaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
