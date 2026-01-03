import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irfs")
export default class IrfController {
  @operation({
    summary: "Get Irfs",
  })
  @get()
  static getIrfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irf",
  })
  @post("{id}")
  static createIrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
