import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsis")
export default class NsiController {
  @operation({
    summary: "Get Nsis",
  })
  @get()
  static getNsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsi",
  })
  @post("{id}")
  static createNsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
