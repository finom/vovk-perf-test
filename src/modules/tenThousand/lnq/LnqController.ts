import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnqs")
export default class LnqController {
  @operation({
    summary: "Get Lnqs",
  })
  @get()
  static getLnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnq",
  })
  @post("{id}")
  static createLnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
