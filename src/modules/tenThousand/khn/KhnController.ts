import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khns")
export default class KhnController {
  @operation({
    summary: "Get Khns",
  })
  @get()
  static getKhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khn",
  })
  @post("{id}")
  static createKhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
