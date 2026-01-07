import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjk")
export default class KjkController {
  @operation({
    summary: "Get Kjk",
  })
  @get()
  static getKjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjk",
  })
  @post("{id}")
  static createKjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
