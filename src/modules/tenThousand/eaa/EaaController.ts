import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaas")
export default class EaaController {
  @operation({
    summary: "Get Eaas",
  })
  @get()
  static getEaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaa",
  })
  @post("{id}")
  static createEaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
