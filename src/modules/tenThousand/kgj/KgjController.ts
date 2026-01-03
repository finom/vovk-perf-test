import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgjs")
export default class KgjController {
  @operation({
    summary: "Get Kgjs",
  })
  @get()
  static getKgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgj",
  })
  @post("{id}")
  static createKgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
