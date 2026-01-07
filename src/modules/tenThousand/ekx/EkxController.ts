import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekx")
export default class EkxController {
  @operation({
    summary: "Get Ekx",
  })
  @get()
  static getEkx = procedure({
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
