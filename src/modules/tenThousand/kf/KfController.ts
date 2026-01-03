import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfs")
export default class KfController {
  @operation({
    summary: "Get Kfs",
  })
  @get()
  static getKfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kf",
  })
  @post("{id}")
  static createKf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
