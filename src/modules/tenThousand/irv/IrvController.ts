import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irv")
export default class IrvController {
  @operation({
    summary: "Get Irv",
  })
  @get()
  static getIrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irv",
  })
  @post("{id}")
  static createIrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
