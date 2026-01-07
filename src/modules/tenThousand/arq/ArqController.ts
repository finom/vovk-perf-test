import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arq")
export default class ArqController {
  @operation({
    summary: "Get Arq",
  })
  @get()
  static getArq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arq",
  })
  @post("{id}")
  static createArq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
