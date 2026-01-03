import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkms")
export default class BkmController {
  @operation({
    summary: "Get Bkms",
  })
  @get()
  static getBkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkm",
  })
  @post("{id}")
  static createBkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
