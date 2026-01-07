import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvq")
export default class KvqController {
  @operation({
    summary: "Get Kvq",
  })
  @get()
  static getKvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvq",
  })
  @post("{id}")
  static createKvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
