import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejt")
export default class EjtController {
  @operation({
    summary: "Get Ejt",
  })
  @get()
  static getEjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejt",
  })
  @post("{id}")
  static createEjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
