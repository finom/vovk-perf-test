import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkq")
export default class LkqController {
  @operation({
    summary: "Get Lkq",
  })
  @get()
  static getLkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkq",
  })
  @post("{id}")
  static createLkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
