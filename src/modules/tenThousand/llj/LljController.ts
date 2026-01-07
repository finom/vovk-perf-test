import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llj")
export default class LljController {
  @operation({
    summary: "Get Llj",
  })
  @get()
  static getLlj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llj",
  })
  @post("{id}")
  static createLlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
