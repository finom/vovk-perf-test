import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhas")
export default class NhaController {
  @operation({
    summary: "Get Nhas",
  })
  @get()
  static getNhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nha",
  })
  @post("{id}")
  static createNha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
