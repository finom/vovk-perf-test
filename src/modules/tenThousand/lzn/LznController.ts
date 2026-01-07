import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzn")
export default class LznController {
  @operation({
    summary: "Get Lzn",
  })
  @get()
  static getLzn = procedure({
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
