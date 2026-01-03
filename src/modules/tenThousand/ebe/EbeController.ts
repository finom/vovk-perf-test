import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebes")
export default class EbeController {
  @operation({
    summary: "Get Ebes",
  })
  @get()
  static getEbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebe",
  })
  @post("{id}")
  static createEbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
