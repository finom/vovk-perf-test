import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilns")
export default class IlnController {
  @operation({
    summary: "Get Ilns",
  })
  @get()
  static getIlns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iln",
  })
  @post("{id}")
  static createIln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
