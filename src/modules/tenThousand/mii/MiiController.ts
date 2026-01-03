import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miis")
export default class MiiController {
  @operation({
    summary: "Get Miis",
  })
  @get()
  static getMiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mii",
  })
  @post("{id}")
  static createMii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
