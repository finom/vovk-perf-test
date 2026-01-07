import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbl")
export default class MblController {
  @operation({
    summary: "Get Mbl",
  })
  @get()
  static getMbl = procedure({
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
