import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilas")
export default class IlaController {
  @operation({
    summary: "Get Ilas",
  })
  @get()
  static getIlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ila",
  })
  @post("{id}")
  static createIla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
