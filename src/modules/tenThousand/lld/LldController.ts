import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lld")
export default class LldController {
  @operation({
    summary: "Get Lld",
  })
  @get()
  static getLld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lld",
  })
  @post("{id}")
  static createLld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
