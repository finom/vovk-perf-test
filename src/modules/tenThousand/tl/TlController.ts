import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tls")
export default class TlController {
  @operation({
    summary: "Get Tls",
  })
  @get()
  static getTls = procedure({
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
