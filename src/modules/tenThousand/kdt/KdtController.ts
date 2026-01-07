import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdt")
export default class KdtController {
  @operation({
    summary: "Get Kdt",
  })
  @get()
  static getKdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdt",
  })
  @post("{id}")
  static createKdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
