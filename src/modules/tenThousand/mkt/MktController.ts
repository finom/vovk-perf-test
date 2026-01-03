import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkts")
export default class MktController {
  @operation({
    summary: "Get Mkts",
  })
  @get()
  static getMkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkt",
  })
  @post("{id}")
  static createMkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
