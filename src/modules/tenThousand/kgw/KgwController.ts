import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgws")
export default class KgwController {
  @operation({
    summary: "Get Kgws",
  })
  @get()
  static getKgws = procedure({
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
