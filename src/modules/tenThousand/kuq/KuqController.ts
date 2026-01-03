import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuqs")
export default class KuqController {
  @operation({
    summary: "Get Kuqs",
  })
  @get()
  static getKuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuq",
  })
  @post("{id}")
  static createKuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
