import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mns")
export default class MnController {
  @operation({
    summary: "Get Mns",
  })
  @get()
  static getMns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mn",
  })
  @post("{id}")
  static createMn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
