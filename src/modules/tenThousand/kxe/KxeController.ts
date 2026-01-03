import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxes")
export default class KxeController {
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
    summary: "Create Kxe",
  })
  @post("{id}")
  static createKxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
