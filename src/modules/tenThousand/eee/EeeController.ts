import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eees")
export default class EeeController {
  @operation({
    summary: "Get Eees",
  })
  @get()
  static getEees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eee",
  })
  @post("{id}")
  static createEee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
