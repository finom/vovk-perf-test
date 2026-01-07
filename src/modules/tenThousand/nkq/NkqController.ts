import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkq")
export default class NkqController {
  @operation({
    summary: "Get Nkq",
  })
  @get()
  static getNkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkq",
  })
  @post("{id}")
  static createNkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
