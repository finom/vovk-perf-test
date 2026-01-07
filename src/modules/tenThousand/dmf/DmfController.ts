import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmf")
export default class DmfController {
  @operation({
    summary: "Get Dmf",
  })
  @get()
  static getDmf = procedure({
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
