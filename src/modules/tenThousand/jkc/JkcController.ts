import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkcs")
export default class JkcController {
  @operation({
    summary: "Get Jkcs",
  })
  @get()
  static getJkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkc",
  })
  @post("{id}")
  static createJkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
