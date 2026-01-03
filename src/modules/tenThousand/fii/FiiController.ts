import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiis")
export default class FiiController {
  @operation({
    summary: "Get Fiis",
  })
  @get()
  static getFiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fii",
  })
  @post("{id}")
  static createFii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
