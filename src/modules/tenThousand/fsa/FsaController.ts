import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsa")
export default class FsaController {
  @operation({
    summary: "Get Fsa",
  })
  @get()
  static getFsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsa",
  })
  @post("{id}")
  static createFsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
