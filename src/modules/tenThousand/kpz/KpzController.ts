import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpzs")
export default class KpzController {
  @operation({
    summary: "Get Kpzs",
  })
  @get()
  static getKpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpz",
  })
  @post("{id}")
  static createKpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
