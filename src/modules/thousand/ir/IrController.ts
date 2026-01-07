import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ir")
export default class IrController {
  @operation({
    summary: "Get Ir",
  })
  @get()
  static getIr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ir",
  })
  @post("{id}")
  static createIr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
