import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfts")
export default class KftController {
  @operation({
    summary: "Get Kfts",
  })
  @get()
  static getKfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kft",
  })
  @post("{id}")
  static createKft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
