import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niqs")
export default class NiqController {
  @operation({
    summary: "Get Niqs",
  })
  @get()
  static getNiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Niq",
  })
  @post("{id}")
  static createNiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
