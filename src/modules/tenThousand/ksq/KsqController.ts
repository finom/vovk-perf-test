import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksqs")
export default class KsqController {
  @operation({
    summary: "Get Ksqs",
  })
  @get()
  static getKsqs = procedure({
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
