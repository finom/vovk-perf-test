import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irp")
export default class IrpController {
  @operation({
    summary: "Get Irp",
  })
  @get()
  static getIrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irp",
  })
  @post("{id}")
  static createIrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
