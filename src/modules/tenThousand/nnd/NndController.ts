import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnds")
export default class NndController {
  @operation({
    summary: "Get Nnds",
  })
  @get()
  static getNnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnd",
  })
  @post("{id}")
  static createNnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
