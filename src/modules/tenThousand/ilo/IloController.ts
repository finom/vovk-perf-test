import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilo")
export default class IloController {
  @operation({
    summary: "Get Ilo",
  })
  @get()
  static getIlo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilo",
  })
  @post("{id}")
  static createIlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
