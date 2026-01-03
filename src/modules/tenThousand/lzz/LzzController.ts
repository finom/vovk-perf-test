import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzzes")
export default class LzzController {
  @operation({
    summary: "Get Lzzes",
  })
  @get()
  static getLzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzz",
  })
  @post("{id}")
  static createLzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
