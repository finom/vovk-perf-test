import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niz")
export default class NizController {
  @operation({
    summary: "Get Niz",
  })
  @get()
  static getNiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Niz",
  })
  @post("{id}")
  static createNiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
