import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkms")
export default class GkmController {
  @operation({
    summary: "Get Gkms",
  })
  @get()
  static getGkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkm",
  })
  @post("{id}")
  static createGkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
