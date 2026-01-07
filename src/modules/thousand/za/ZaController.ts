import { procedure, prefix, get, post, operation } from "vovk";

@prefix("za")
export default class ZaController {
  @operation({
    summary: "Get Za",
  })
  @get()
  static getZa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Za",
  })
  @post("{id}")
  static createZa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
