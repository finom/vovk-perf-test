import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgp")
export default class HgpController {
  @operation({
    summary: "Get Hgp",
  })
  @get()
  static getHgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgp",
  })
  @post("{id}")
  static createHgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
