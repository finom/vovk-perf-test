import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kni")
export default class KniController {
  @operation({
    summary: "Get Kni",
  })
  @get()
  static getKni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kni",
  })
  @post("{id}")
  static createKni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
