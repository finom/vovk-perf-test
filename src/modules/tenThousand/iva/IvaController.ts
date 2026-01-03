import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivas")
export default class IvaController {
  @operation({
    summary: "Get Ivas",
  })
  @get()
  static getIvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iva",
  })
  @post("{id}")
  static createIva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
