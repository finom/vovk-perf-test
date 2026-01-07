import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqr")
export default class NqrController {
  @operation({
    summary: "Get Nqr",
  })
  @get()
  static getNqr = procedure({
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
