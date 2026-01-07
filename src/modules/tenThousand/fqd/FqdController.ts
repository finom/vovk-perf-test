import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqd")
export default class FqdController {
  @operation({
    summary: "Get Fqd",
  })
  @get()
  static getFqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqd",
  })
  @post("{id}")
  static createFqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
