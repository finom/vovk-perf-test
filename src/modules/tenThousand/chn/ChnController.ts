import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chns")
export default class ChnController {
  @operation({
    summary: "Get Chns",
  })
  @get()
  static getChns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chn",
  })
  @post("{id}")
  static createChn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
