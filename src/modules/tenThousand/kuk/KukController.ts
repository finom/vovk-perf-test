import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuks")
export default class KukController {
  @operation({
    summary: "Get Kuks",
  })
  @get()
  static getKuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuk",
  })
  @post("{id}")
  static createKuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
