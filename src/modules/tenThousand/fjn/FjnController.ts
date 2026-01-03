import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjns")
export default class FjnController {
  @operation({
    summary: "Get Fjns",
  })
  @get()
  static getFjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjn",
  })
  @post("{id}")
  static createFjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
