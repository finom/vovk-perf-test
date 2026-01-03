import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csis")
export default class CsiController {
  @operation({
    summary: "Get Csis",
  })
  @get()
  static getCsis = procedure({
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
