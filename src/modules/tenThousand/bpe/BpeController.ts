import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpe")
export default class BpeController {
  @operation({
    summary: "Get Bpe",
  })
  @get()
  static getBpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpe",
  })
  @post("{id}")
  static createBpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
