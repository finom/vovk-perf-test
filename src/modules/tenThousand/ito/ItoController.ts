import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ito")
export default class ItoController {
  @operation({
    summary: "Get Ito",
  })
  @get()
  static getIto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ito",
  })
  @post("{id}")
  static createIto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
