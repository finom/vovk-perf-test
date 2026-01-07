import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgf")
export default class HgfController {
  @operation({
    summary: "Get Hgf",
  })
  @get()
  static getHgf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgf",
  })
  @post("{id}")
  static createHgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
