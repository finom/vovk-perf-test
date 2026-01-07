import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kii")
export default class KiiController {
  @operation({
    summary: "Get Kii",
  })
  @get()
  static getKii = procedure({
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
