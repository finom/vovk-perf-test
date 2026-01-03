import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvhs")
export default class KvhController {
  @operation({
    summary: "Get Kvhs",
  })
  @get()
  static getKvhs = procedure({
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
