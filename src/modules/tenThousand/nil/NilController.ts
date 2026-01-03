import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nils")
export default class NilController {
  @operation({
    summary: "Get Nils",
  })
  @get()
  static getNils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nil",
  })
  @post("{id}")
  static createNil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
