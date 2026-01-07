import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idn")
export default class IdnController {
  @operation({
    summary: "Get Idn",
  })
  @get()
  static getIdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idn",
  })
  @post("{id}")
  static createIdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
