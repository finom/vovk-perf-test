import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkfs")
export default class FkfController {
  @operation({
    summary: "Get Fkfs",
  })
  @get()
  static getFkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkf",
  })
  @post("{id}")
  static createFkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
