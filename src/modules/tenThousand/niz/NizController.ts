import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nizs")
export default class NizController {
  @operation({
    summary: "Get Nizs",
  })
  @get()
  static getNizs = procedure({
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
