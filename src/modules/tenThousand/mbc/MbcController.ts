import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbc")
export default class MbcController {
  @operation({
    summary: "Get Mbc",
  })
  @get()
  static getMbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbc",
  })
  @post("{id}")
  static createMbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
