import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsi")
export default class NsiController {
  @operation({
    summary: "Get Nsi",
  })
  @get()
  static getNsi = procedure({
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
