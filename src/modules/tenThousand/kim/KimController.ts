import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kims")
export default class KimController {
  @operation({
    summary: "Get Kims",
  })
  @get()
  static getKims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kim",
  })
  @post("{id}")
  static createKim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
