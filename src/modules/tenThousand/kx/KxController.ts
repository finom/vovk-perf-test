import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxes")
export default class KxController {
  @operation({
    summary: "Get Kxes",
  })
  @get()
  static getKxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kx",
  })
  @post("{id}")
  static createKx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
