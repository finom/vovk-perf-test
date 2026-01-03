import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koks")
export default class KokController {
  @operation({
    summary: "Get Koks",
  })
  @get()
  static getKoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kok",
  })
  @post("{id}")
  static createKok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
