import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkp")
export default class LkpController {
  @operation({
    summary: "Get Lkp",
  })
  @get()
  static getLkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkp",
  })
  @post("{id}")
  static createLkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
