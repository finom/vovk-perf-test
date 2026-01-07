import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksq")
export default class KsqController {
  @operation({
    summary: "Get Ksq",
  })
  @get()
  static getKsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksq",
  })
  @post("{id}")
  static createKsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
