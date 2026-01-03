import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atvs")
export default class AtvController {
  @operation({
    summary: "Get Atvs",
  })
  @get()
  static getAtvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atv",
  })
  @post("{id}")
  static createAtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
