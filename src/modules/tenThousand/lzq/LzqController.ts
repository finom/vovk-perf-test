import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzq")
export default class LzqController {
  @operation({
    summary: "Get Lzq",
  })
  @get()
  static getLzq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzq",
  })
  @post("{id}")
  static createLzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
