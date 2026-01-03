import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjts")
export default class FjtController {
  @operation({
    summary: "Get Fjts",
  })
  @get()
  static getFjts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjt",
  })
  @post("{id}")
  static createFjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
