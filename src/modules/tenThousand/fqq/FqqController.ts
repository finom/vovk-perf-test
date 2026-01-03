import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqqs")
export default class FqqController {
  @operation({
    summary: "Get Fqqs",
  })
  @get()
  static getFqqs = procedure({
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
