import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcfs")
export default class KcfController {
  @operation({
    summary: "Get Kcfs",
  })
  @get()
  static getKcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcf",
  })
  @post("{id}")
  static createKcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
