import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgc")
export default class HgcController {
  @operation({
    summary: "Get Hgc",
  })
  @get()
  static getHgc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgc",
  })
  @post("{id}")
  static createHgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
