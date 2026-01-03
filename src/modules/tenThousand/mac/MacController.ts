import { procedure, prefix, get, post, operation } from "vovk";

@prefix("macs")
export default class MacController {
  @operation({
    summary: "Get Macs",
  })
  @get()
  static getMacs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mac",
  })
  @post("{id}")
  static createMac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
