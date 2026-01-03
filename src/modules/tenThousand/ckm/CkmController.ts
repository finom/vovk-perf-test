import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckms")
export default class CkmController {
  @operation({
    summary: "Get Ckms",
  })
  @get()
  static getCkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckm",
  })
  @post("{id}")
  static createCkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
