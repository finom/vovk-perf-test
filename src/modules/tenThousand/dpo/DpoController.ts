import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpo")
export default class DpoController {
  @operation({
    summary: "Get Dpo",
  })
  @get()
  static getDpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpo",
  })
  @post("{id}")
  static createDpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
