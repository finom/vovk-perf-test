import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxs")
export default class KxsController {
  @operation({
    summary: "Get Kxs",
  })
  @get()
  static getKxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxs",
  })
  @post("{id}")
  static createKxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
