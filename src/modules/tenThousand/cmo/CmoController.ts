import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmos")
export default class CmoController {
  @operation({
    summary: "Get Cmos",
  })
  @get()
  static getCmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmo",
  })
  @post("{id}")
  static createCmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
