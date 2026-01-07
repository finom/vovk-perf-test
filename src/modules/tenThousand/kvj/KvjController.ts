import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvj")
export default class KvjController {
  @operation({
    summary: "Get Kvj",
  })
  @get()
  static getKvj = procedure({
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
