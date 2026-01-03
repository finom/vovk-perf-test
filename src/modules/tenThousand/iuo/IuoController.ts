import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuos")
export default class IuoController {
  @operation({
    summary: "Get Iuos",
  })
  @get()
  static getIuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuo",
  })
  @post("{id}")
  static createIuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
