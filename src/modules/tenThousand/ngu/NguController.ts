import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngus")
export default class NguController {
  @operation({
    summary: "Get Ngus",
  })
  @get()
  static getNgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngu",
  })
  @post("{id}")
  static createNgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
