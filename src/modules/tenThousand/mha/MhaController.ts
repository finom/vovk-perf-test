import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mha")
export default class MhaController {
  @operation({
    summary: "Get Mha",
  })
  @get()
  static getMha = procedure({
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
