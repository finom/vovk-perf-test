import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neis")
export default class NeiController {
  @operation({
    summary: "Get Neis",
  })
  @get()
  static getNeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nei",
  })
  @post("{id}")
  static createNei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
