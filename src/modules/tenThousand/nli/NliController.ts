import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nli")
export default class NliController {
  @operation({
    summary: "Get Nli",
  })
  @get()
  static getNli = procedure({
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
