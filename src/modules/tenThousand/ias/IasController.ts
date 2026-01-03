import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ias")
export default class IasController {
  @operation({
    summary: "Get Ias",
  })
  @get()
  static getIas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ias",
  })
  @post("{id}")
  static createIas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
