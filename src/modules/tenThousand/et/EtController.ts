import { procedure, prefix, get, post, operation } from "vovk";

@prefix("et")
export default class EtController {
  @operation({
    summary: "Get Et",
  })
  @get()
  static getEt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Et",
  })
  @post("{id}")
  static createEt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
