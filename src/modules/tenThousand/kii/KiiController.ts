import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiis")
export default class KiiController {
  @operation({
    summary: "Get Kiis",
  })
  @get()
  static getKiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kii",
  })
  @post("{id}")
  static createKii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
