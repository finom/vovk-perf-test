import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqis")
export default class FqiController {
  @operation({
    summary: "Get Fqis",
  })
  @get()
  static getFqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqi",
  })
  @post("{id}")
  static createFqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
