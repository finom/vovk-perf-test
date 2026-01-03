import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekus")
export default class EkuController {
  @operation({
    summary: "Get Ekus",
  })
  @get()
  static getEkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eku",
  })
  @post("{id}")
  static createEku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
