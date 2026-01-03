import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chrs")
export default class ChrController {
  @operation({
    summary: "Get Chrs",
  })
  @get()
  static getChrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chr",
  })
  @post("{id}")
  static createChr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
