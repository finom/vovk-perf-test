import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqrs")
export default class NqrController {
  @operation({
    summary: "Get Nqrs",
  })
  @get()
  static getNqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqr",
  })
  @post("{id}")
  static createNqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
