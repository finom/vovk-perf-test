import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxd")
export default class KxdController {
  @operation({
    summary: "Get Kxd",
  })
  @get()
  static getKxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxd",
  })
  @post("{id}")
  static createKxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
