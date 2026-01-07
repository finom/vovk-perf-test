import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csi")
export default class CsiController {
  @operation({
    summary: "Get Csi",
  })
  @get()
  static getCsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csi",
  })
  @post("{id}")
  static createCsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
