import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjis")
export default class FjiController {
  @operation({
    summary: "Get Fjis",
  })
  @get()
  static getFjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fji",
  })
  @post("{id}")
  static createFji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
