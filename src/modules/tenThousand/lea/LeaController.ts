import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leas")
export default class LeaController {
  @operation({
    summary: "Get Leas",
  })
  @get()
  static getLeas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lea",
  })
  @post("{id}")
  static createLea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
