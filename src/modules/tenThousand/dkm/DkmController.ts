import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkm")
export default class DkmController {
  @operation({
    summary: "Get Dkm",
  })
  @get()
  static getDkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkm",
  })
  @post("{id}")
  static createDkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
