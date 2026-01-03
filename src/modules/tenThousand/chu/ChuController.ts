import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chus")
export default class ChuController {
  @operation({
    summary: "Get Chus",
  })
  @get()
  static getChus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chu",
  })
  @post("{id}")
  static createChu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
