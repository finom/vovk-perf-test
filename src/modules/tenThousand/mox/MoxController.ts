import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mox")
export default class MoxController {
  @operation({
    summary: "Get Mox",
  })
  @get()
  static getMox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mox",
  })
  @post("{id}")
  static createMox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
