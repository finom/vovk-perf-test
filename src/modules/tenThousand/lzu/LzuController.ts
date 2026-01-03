import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzus")
export default class LzuController {
  @operation({
    summary: "Get Lzus",
  })
  @get()
  static getLzus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzu",
  })
  @post("{id}")
  static createLzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
