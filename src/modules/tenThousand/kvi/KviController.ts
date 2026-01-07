import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvi")
export default class KviController {
  @operation({
    summary: "Get Kvi",
  })
  @get()
  static getKvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvi",
  })
  @post("{id}")
  static createKvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
