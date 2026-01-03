import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhds")
export default class NhdController {
  @operation({
    summary: "Get Nhds",
  })
  @get()
  static getNhds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhd",
  })
  @post("{id}")
  static createNhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
