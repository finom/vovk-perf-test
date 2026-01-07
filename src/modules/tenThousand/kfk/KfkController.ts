import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfk")
export default class KfkController {
  @operation({
    summary: "Get Kfk",
  })
  @get()
  static getKfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfk",
  })
  @post("{id}")
  static createKfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
