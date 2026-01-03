import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvjs")
export default class KvjController {
  @operation({
    summary: "Get Kvjs",
  })
  @get()
  static getKvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvj",
  })
  @post("{id}")
  static createKvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
