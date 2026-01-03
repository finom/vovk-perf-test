import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgvs")
export default class KgvController {
  @operation({
    summary: "Get Kgvs",
  })
  @get()
  static getKgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgv",
  })
  @post("{id}")
  static createKgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
