import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fszs")
export default class FszController {
  @operation({
    summary: "Get Fszs",
  })
  @get()
  static getFszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsz",
  })
  @post("{id}")
  static createFsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
