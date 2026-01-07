import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ila")
export default class IlaController {
  @operation({
    summary: "Get Ila",
  })
  @get()
  static getIla = procedure({
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
