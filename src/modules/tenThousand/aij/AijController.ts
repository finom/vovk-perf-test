import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aij")
export default class AijController {
  @operation({
    summary: "Get Aij",
  })
  @get()
  static getAij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aij",
  })
  @post("{id}")
  static createAij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
