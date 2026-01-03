import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkcs")
export default class GkcController {
  @operation({
    summary: "Get Gkcs",
  })
  @get()
  static getGkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkc",
  })
  @post("{id}")
  static createGkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
