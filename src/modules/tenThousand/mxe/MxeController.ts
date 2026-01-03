import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxes")
export default class MxeController {
  @operation({
    summary: "Get Mxes",
  })
  @get()
  static getMxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxe",
  })
  @post("{id}")
  static createMxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
