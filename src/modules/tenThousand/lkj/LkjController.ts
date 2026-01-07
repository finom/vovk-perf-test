import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkj")
export default class LkjController {
  @operation({
    summary: "Get Lkj",
  })
  @get()
  static getLkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkj",
  })
  @post("{id}")
  static createLkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
