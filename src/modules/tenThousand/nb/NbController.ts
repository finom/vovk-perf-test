import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbs")
export default class NbController {
  @operation({
    summary: "Get Nbs",
  })
  @get()
  static getNbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nb",
  })
  @post("{id}")
  static createNb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
