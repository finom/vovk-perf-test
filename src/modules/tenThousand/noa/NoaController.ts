import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noas")
export default class NoaController {
  @operation({
    summary: "Get Noas",
  })
  @get()
  static getNoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noa",
  })
  @post("{id}")
  static createNoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
