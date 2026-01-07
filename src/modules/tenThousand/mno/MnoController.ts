import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mno")
export default class MnoController {
  @operation({
    summary: "Get Mno",
  })
  @get()
  static getMno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mno",
  })
  @post("{id}")
  static createMno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
