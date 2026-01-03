import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irjs")
export default class IrjController {
  @operation({
    summary: "Get Irjs",
  })
  @get()
  static getIrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irj",
  })
  @post("{id}")
  static createIrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
