import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhe")
export default class MheController {
  @operation({
    summary: "Get Mhe",
  })
  @get()
  static getMhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhe",
  })
  @post("{id}")
  static createMhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
