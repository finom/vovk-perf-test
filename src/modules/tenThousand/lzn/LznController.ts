import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzns")
export default class LznController {
  @operation({
    summary: "Get Lzns",
  })
  @get()
  static getLzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzn",
  })
  @post("{id}")
  static createLzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
