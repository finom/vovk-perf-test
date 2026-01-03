import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nns")
export default class NnController {
  @operation({
    summary: "Get Nns",
  })
  @get()
  static getNns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nn",
  })
  @post("{id}")
  static createNn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
