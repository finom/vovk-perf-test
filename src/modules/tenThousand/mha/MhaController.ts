import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhas")
export default class MhaController {
  @operation({
    summary: "Get Mhas",
  })
  @get()
  static getMhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mha",
  })
  @post("{id}")
  static createMha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
