import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etes")
export default class EteController {
  @operation({
    summary: "Get Etes",
  })
  @get()
  static getEtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ete",
  })
  @post("{id}")
  static createEte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
