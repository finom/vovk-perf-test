import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgs")
export default class MgController {
  @operation({
    summary: "Get Mgs",
  })
  @get()
  static getMgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mg",
  })
  @post("{id}")
  static createMg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
