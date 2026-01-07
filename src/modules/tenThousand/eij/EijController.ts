import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eij")
export default class EijController {
  @operation({
    summary: "Get Eij",
  })
  @get()
  static getEij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eij",
  })
  @post("{id}")
  static createEij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
