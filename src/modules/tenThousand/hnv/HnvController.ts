import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnv")
export default class HnvController {
  @operation({
    summary: "Get Hnv",
  })
  @get()
  static getHnv = procedure({
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
