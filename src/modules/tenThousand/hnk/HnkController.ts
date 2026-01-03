import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnks")
export default class HnkController {
  @operation({
    summary: "Get Hnks",
  })
  @get()
  static getHnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnk",
  })
  @post("{id}")
  static createHnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
