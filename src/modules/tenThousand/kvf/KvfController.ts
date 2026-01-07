import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvf")
export default class KvfController {
  @operation({
    summary: "Get Kvf",
  })
  @get()
  static getKvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvf",
  })
  @post("{id}")
  static createKvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
