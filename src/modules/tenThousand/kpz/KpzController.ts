import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpz")
export default class KpzController {
  @operation({
    summary: "Get Kpz",
  })
  @get()
  static getKpz = procedure({
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
