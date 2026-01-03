import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lts")
export default class LtController {
  @operation({
    summary: "Get Lts",
  })
  @get()
  static getLts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lt",
  })
  @post("{id}")
  static createLt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
