import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icn")
export default class IcnController {
  @operation({
    summary: "Get Icn",
  })
  @get()
  static getIcn = procedure({
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
