import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuses")
export default class FusController {
  @operation({
    summary: "Get Fuses",
  })
  @get()
  static getFuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fus",
  })
  @post("{id}")
  static createFus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
