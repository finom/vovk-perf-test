import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eims")
export default class EimController {
  @operation({
    summary: "Get Eims",
  })
  @get()
  static getEims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eim",
  })
  @post("{id}")
  static createEim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
