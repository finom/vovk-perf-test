import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arv")
export default class ArvController {
  @operation({
    summary: "Get Arv",
  })
  @get()
  static getArv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arv",
  })
  @post("{id}")
  static createArv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
