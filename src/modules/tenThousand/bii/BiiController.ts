import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biis")
export default class BiiController {
  @operation({
    summary: "Get Biis",
  })
  @get()
  static getBiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bii",
  })
  @post("{id}")
  static createBii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
