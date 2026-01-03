import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nzs")
export default class NzController {
  @operation({
    summary: "Get Nzs",
  })
  @get()
  static getNzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nz",
  })
  @post("{id}")
  static createNz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
