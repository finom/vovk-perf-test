import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxes")
export default class CxeController {
  @operation({
    summary: "Get Cxes",
  })
  @get()
  static getCxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxe",
  })
  @post("{id}")
  static createCxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
