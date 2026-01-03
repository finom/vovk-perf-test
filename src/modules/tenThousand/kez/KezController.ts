import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kezs")
export default class KezController {
  @operation({
    summary: "Get Kezs",
  })
  @get()
  static getKezs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kez",
  })
  @post("{id}")
  static createKez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
