import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgw")
export default class KgwController {
  @operation({
    summary: "Get Kgw",
  })
  @get()
  static getKgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgw",
  })
  @post("{id}")
  static createKgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
