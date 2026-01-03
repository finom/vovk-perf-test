import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyos")
export default class KyoController {
  @operation({
    summary: "Get Kyos",
  })
  @get()
  static getKyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyo",
  })
  @post("{id}")
  static createKyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
