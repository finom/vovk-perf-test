import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlis")
export default class NliController {
  @operation({
    summary: "Get Nlis",
  })
  @get()
  static getNlis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nli",
  })
  @post("{id}")
  static createNli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
