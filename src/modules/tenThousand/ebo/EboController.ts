import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebos")
export default class EboController {
  @operation({
    summary: "Get Ebos",
  })
  @get()
  static getEbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebo",
  })
  @post("{id}")
  static createEbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
