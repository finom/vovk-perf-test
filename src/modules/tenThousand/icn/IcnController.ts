import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icns")
export default class IcnController {
  @operation({
    summary: "Get Icns",
  })
  @get()
  static getIcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icn",
  })
  @post("{id}")
  static createIcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
