import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjks")
export default class FjkController {
  @operation({
    summary: "Get Fjks",
  })
  @get()
  static getFjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjk",
  })
  @post("{id}")
  static createFjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
