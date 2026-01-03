import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuus")
export default class KuuController {
  @operation({
    summary: "Get Kuus",
  })
  @get()
  static getKuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuu",
  })
  @post("{id}")
  static createKuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
