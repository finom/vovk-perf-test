import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irxes")
export default class IrxController {
  @operation({
    summary: "Get Irxes",
  })
  @get()
  static getIrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irx",
  })
  @post("{id}")
  static createIrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
