import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvh")
export default class KvhController {
  @operation({
    summary: "Get Kvh",
  })
  @get()
  static getKvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvh",
  })
  @post("{id}")
  static createKvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
