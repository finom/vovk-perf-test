import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byvs")
export default class ByvController {
  @operation({
    summary: "Get Byvs",
  })
  @get()
  static getByvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byv",
  })
  @post("{id}")
  static createByv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
