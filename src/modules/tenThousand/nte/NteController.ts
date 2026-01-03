import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntes")
export default class NteController {
  @operation({
    summary: "Get Ntes",
  })
  @get()
  static getNtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nte",
  })
  @post("{id}")
  static createNte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
