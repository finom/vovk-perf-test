import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkc")
export default class NkcController {
  @operation({
    summary: "Get Nkc",
  })
  @get()
  static getNkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkc",
  })
  @post("{id}")
  static createNkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
