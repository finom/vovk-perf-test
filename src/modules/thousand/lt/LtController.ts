import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lt")
export default class LtController {
  @operation({
    summary: "Get Lt",
  })
  @get()
  static getLt = procedure({
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
