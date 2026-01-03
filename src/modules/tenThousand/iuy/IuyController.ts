import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuys")
export default class IuyController {
  @operation({
    summary: "Get Iuys",
  })
  @get()
  static getIuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuy",
  })
  @post("{id}")
  static createIuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
