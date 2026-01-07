import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxe")
export default class KxeController {
  @operation({
    summary: "Get Kxe",
  })
  @get()
  static getKxe = procedure({
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
