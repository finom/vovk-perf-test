import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqn")
export default class NqnController {
  @operation({
    summary: "Get Nqn",
  })
  @get()
  static getNqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqn",
  })
  @post("{id}")
  static createNqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
