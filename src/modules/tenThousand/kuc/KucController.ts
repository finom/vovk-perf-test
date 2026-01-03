import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kucs")
export default class KucController {
  @operation({
    summary: "Get Kucs",
  })
  @get()
  static getKucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuc",
  })
  @post("{id}")
  static createKuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
