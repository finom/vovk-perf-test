import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekxes")
export default class EkxController {
  @operation({
    summary: "Get Ekxes",
  })
  @get()
  static getEkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekx",
  })
  @post("{id}")
  static createEkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
