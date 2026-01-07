import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnd")
export default class BndController {
  @operation({
    summary: "Get Bnd",
  })
  @get()
  static getBnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnd",
  })
  @post("{id}")
  static createBnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
