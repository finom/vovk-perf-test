import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyl")
export default class CylController {
  @operation({
    summary: "Get Cyl",
  })
  @get()
  static getCyl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyl",
  })
  @post("{id}")
  static createCyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
