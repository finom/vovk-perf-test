import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anjs")
export default class AnjController {
  @operation({
    summary: "Get Anjs",
  })
  @get()
  static getAnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anj",
  })
  @post("{id}")
  static createAnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
