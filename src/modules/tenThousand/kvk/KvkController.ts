import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvk")
export default class KvkController {
  @operation({
    summary: "Get Kvk",
  })
  @get()
  static getKvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvk",
  })
  @post("{id}")
  static createKvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
