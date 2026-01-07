import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nql")
export default class NqlController {
  @operation({
    summary: "Get Nql",
  })
  @get()
  static getNql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nql",
  })
  @post("{id}")
  static createNql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
