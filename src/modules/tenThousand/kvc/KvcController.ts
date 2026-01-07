import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvc")
export default class KvcController {
  @operation({
    summary: "Get Kvc",
  })
  @get()
  static getKvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvc",
  })
  @post("{id}")
  static createKvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
