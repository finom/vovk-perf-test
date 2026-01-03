import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuys")
export default class KuyController {
  @operation({
    summary: "Get Kuys",
  })
  @get()
  static getKuys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuy",
  })
  @post("{id}")
  static createKuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
