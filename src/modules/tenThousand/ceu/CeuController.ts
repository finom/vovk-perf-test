import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceu")
export default class CeuController {
  @operation({
    summary: "Get Ceu",
  })
  @get()
  static getCeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceu",
  })
  @post("{id}")
  static createCeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
