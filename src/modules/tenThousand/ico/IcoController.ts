import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icos")
export default class IcoController {
  @operation({
    summary: "Get Icos",
  })
  @get()
  static getIcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ico",
  })
  @post("{id}")
  static createIco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
