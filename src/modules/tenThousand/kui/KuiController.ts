import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuis")
export default class KuiController {
  @operation({
    summary: "Get Kuis",
  })
  @get()
  static getKuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kui",
  })
  @post("{id}")
  static createKui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
