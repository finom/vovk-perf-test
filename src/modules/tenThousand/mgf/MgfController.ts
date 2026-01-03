import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgfs")
export default class MgfController {
  @operation({
    summary: "Get Mgfs",
  })
  @get()
  static getMgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgf",
  })
  @post("{id}")
  static createMgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
