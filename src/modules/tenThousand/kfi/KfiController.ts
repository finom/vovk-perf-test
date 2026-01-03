import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfis")
export default class KfiController {
  @operation({
    summary: "Get Kfis",
  })
  @get()
  static getKfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfi",
  })
  @post("{id}")
  static createKfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
