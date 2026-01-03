import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekms")
export default class EkmController {
  @operation({
    summary: "Get Ekms",
  })
  @get()
  static getEkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekm",
  })
  @post("{id}")
  static createEkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
