import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkts")
export default class KktController {
  @operation({
    summary: "Get Kkts",
  })
  @get()
  static getKkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkt",
  })
  @post("{id}")
  static createKkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
