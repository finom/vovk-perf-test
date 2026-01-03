import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehqs")
export default class EhqController {
  @operation({
    summary: "Get Ehqs",
  })
  @get()
  static getEhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehq",
  })
  @post("{id}")
  static createEhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
