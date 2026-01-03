import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njns")
export default class NjnController {
  @operation({
    summary: "Get Njns",
  })
  @get()
  static getNjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njn",
  })
  @post("{id}")
  static createNjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
