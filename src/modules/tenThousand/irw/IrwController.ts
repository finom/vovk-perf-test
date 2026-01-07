import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irw")
export default class IrwController {
  @operation({
    summary: "Get Irw",
  })
  @get()
  static getIrw = procedure({
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
