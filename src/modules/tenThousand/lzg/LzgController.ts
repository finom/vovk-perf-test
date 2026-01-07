import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzg")
export default class LzgController {
  @operation({
    summary: "Get Lzg",
  })
  @get()
  static getLzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzg",
  })
  @post("{id}")
  static createLzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
