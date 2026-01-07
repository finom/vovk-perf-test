import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkn")
export default class LknController {
  @operation({
    summary: "Get Lkn",
  })
  @get()
  static getLkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkn",
  })
  @post("{id}")
  static createLkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
