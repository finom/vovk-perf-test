import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msa")
export default class MsaController {
  @operation({
    summary: "Get Msa",
  })
  @get()
  static getMsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msa",
  })
  @post("{id}")
  static createMsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
