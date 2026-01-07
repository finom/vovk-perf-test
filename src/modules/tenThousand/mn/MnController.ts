import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mn")
export default class MnController {
  @operation({
    summary: "Get Mn",
  })
  @get()
  static getMn = procedure({
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
