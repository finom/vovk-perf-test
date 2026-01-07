import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgd")
export default class HgdController {
  @operation({
    summary: "Get Hgd",
  })
  @get()
  static getHgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgd",
  })
  @post("{id}")
  static createHgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
