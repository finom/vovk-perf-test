import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqo")
export default class NqoController {
  @operation({
    summary: "Get Nqo",
  })
  @get()
  static getNqo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqo",
  })
  @post("{id}")
  static createNqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
