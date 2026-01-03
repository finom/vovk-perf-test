import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpes")
export default class BpeController {
  @operation({
    summary: "Get Bpes",
  })
  @get()
  static getBpes = procedure({
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
