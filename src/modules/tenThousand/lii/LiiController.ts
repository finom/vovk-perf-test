import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liis")
export default class LiiController {
  @operation({
    summary: "Get Liis",
  })
  @get()
  static getLiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lii",
  })
  @post("{id}")
  static createLii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
