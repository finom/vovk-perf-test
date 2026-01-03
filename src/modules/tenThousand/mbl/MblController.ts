import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbls")
export default class MblController {
  @operation({
    summary: "Get Mbls",
  })
  @get()
  static getMbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbl",
  })
  @post("{id}")
  static createMbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
