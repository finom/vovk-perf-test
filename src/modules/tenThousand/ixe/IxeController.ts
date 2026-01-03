import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixes")
export default class IxeController {
  @operation({
    summary: "Get Ixes",
  })
  @get()
  static getIxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixe",
  })
  @post("{id}")
  static createIxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
