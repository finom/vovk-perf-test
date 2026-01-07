import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fii")
export default class FiiController {
  @operation({
    summary: "Get Fii",
  })
  @get()
  static getFii = procedure({
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
