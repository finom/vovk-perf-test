import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhas")
export default class LhaController {
  @operation({
    summary: "Get Lhas",
  })
  @get()
  static getLhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lha",
  })
  @post("{id}")
  static createLha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
