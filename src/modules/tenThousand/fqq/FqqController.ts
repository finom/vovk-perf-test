import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqq")
export default class FqqController {
  @operation({
    summary: "Get Fqq",
  })
  @get()
  static getFqq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqq",
  })
  @post("{id}")
  static createFqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
