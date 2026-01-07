import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mln")
export default class MlnController {
  @operation({
    summary: "Get Mln",
  })
  @get()
  static getMln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mln",
  })
  @post("{id}")
  static createMln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
