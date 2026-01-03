import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyts")
export default class KytController {
  @operation({
    summary: "Get Kyts",
  })
  @get()
  static getKyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyt",
  })
  @post("{id}")
  static createKyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
