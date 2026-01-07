import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgf")
export default class MgfController {
  @operation({
    summary: "Get Mgf",
  })
  @get()
  static getMgf = procedure({
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
