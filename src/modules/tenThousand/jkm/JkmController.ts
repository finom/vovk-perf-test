import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkms")
export default class JkmController {
  @operation({
    summary: "Get Jkms",
  })
  @get()
  static getJkms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkm",
  })
  @post("{id}")
  static createJkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
