import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmfs")
export default class DmfController {
  @operation({
    summary: "Get Dmfs",
  })
  @get()
  static getDmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmf",
  })
  @post("{id}")
  static createDmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
