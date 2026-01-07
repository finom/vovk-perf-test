import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zk")
export default class ZkController {
  @operation({
    summary: "Get Zk",
  })
  @get()
  static getZk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zk",
  })
  @post("{id}")
  static createZk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
