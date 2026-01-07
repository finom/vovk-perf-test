import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nda")
export default class NdaController {
  @operation({
    summary: "Get Nda",
  })
  @get()
  static getNda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nda",
  })
  @post("{id}")
  static createNda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
