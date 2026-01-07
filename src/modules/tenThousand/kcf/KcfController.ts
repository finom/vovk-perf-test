import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcf")
export default class KcfController {
  @operation({
    summary: "Get Kcf",
  })
  @get()
  static getKcf = procedure({
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
