import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbl")
export default class DblController {
  @operation({
    summary: "Get Dbl",
  })
  @get()
  static getDbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbl",
  })
  @post("{id}")
  static createDbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
