import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsxes")
export default class LsxController {
  @operation({
    summary: "Get Lsxes",
  })
  @get()
  static getLsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsx",
  })
  @post("{id}")
  static createLsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
