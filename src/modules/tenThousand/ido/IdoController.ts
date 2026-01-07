import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ido")
export default class IdoController {
  @operation({
    summary: "Get Ido",
  })
  @get()
  static getIdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ido",
  })
  @post("{id}")
  static createIdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
