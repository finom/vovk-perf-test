import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hg")
export default class HgController {
  @operation({
    summary: "Get Hg",
  })
  @get()
  static getHg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hg",
  })
  @post("{id}")
  static createHg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
