import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehv")
export default class EhvController {
  @operation({
    summary: "Get Ehv",
  })
  @get()
  static getEhv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehv",
  })
  @post("{id}")
  static createEhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
