import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvg")
export default class KvgController {
  @operation({
    summary: "Get Kvg",
  })
  @get()
  static getKvg = procedure({
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
