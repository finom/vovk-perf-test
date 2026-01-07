import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmc")
export default class KmcController {
  @operation({
    summary: "Get Kmc",
  })
  @get()
  static getKmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmc",
  })
  @post("{id}")
  static createKmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
