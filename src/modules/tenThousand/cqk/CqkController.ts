import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqks")
export default class CqkController {
  @operation({
    summary: "Get Cqks",
  })
  @get()
  static getCqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqk",
  })
  @post("{id}")
  static createCqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
