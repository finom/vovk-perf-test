import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgqs")
export default class HgqController {
  @operation({
    summary: "Get Hgqs",
  })
  @get()
  static getHgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgq",
  })
  @post("{id}")
  static createHgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
