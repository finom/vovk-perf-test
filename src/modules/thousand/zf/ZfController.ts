import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zfs")
export default class ZfController {
  @operation({
    summary: "Get Zfs",
  })
  @get()
  static getZfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zf",
  })
  @post("{id}")
  static createZf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
