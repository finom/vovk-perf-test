import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bii")
export default class BiiController {
  @operation({
    summary: "Get Bii",
  })
  @get()
  static getBii = procedure({
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
