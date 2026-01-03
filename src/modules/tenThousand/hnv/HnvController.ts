import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnvs")
export default class HnvController {
  @operation({
    summary: "Get Hnvs",
  })
  @get()
  static getHnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnv",
  })
  @post("{id}")
  static createHnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
