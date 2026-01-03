import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irws")
export default class IrwController {
  @operation({
    summary: "Get Irws",
  })
  @get()
  static getIrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irw",
  })
  @post("{id}")
  static createIrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
