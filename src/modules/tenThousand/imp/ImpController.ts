import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imp")
export default class ImpController {
  @operation({
    summary: "Get Imp",
  })
  @get()
  static getImp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imp",
  })
  @post("{id}")
  static createImp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
