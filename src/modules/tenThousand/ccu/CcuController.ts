import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccu")
export default class CcuController {
  @operation({
    summary: "Get Ccu",
  })
  @get()
  static getCcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccu",
  })
  @post("{id}")
  static createCcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
