import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbos")
export default class LboController {
  @operation({
    summary: "Get Lbos",
  })
  @get()
  static getLbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbo",
  })
  @post("{id}")
  static createLbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
