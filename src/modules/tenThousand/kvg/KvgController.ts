import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvgs")
export default class KvgController {
  @operation({
    summary: "Get Kvgs",
  })
  @get()
  static getKvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvg",
  })
  @post("{id}")
  static createKvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
