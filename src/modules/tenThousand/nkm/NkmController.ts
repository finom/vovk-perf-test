import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkms")
export default class NkmController {
  @operation({
    summary: "Get Nkms",
  })
  @get()
  static getNkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkm",
  })
  @post("{id}")
  static createNkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
