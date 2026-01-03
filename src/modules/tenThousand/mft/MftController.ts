import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfts")
export default class MftController {
  @operation({
    summary: "Get Mfts",
  })
  @get()
  static getMfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mft",
  })
  @post("{id}")
  static createMft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
