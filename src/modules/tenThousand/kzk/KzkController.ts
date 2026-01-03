import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzks")
export default class KzkController {
  @operation({
    summary: "Get Kzks",
  })
  @get()
  static getKzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzk",
  })
  @post("{id}")
  static createKzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
