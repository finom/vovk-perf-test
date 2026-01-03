import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkms")
export default class LkmController {
  @operation({
    summary: "Get Lkms",
  })
  @get()
  static getLkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkm",
  })
  @post("{id}")
  static createLkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
