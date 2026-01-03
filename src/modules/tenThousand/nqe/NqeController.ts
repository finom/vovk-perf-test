import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqes")
export default class NqeController {
  @operation({
    summary: "Get Nqes",
  })
  @get()
  static getNqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqe",
  })
  @post("{id}")
  static createNqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
