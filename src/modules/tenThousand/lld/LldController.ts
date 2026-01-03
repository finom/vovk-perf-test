import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llds")
export default class LldController {
  @operation({
    summary: "Get Llds",
  })
  @get()
  static getLlds = procedure({
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
