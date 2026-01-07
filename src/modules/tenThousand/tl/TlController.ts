import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tl")
export default class TlController {
  @operation({
    summary: "Get Tl",
  })
  @get()
  static getTl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tl",
  })
  @post("{id}")
  static createTl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
