import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilu")
export default class IluController {
  @operation({
    summary: "Get Ilu",
  })
  @get()
  static getIlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilu",
  })
  @post("{id}")
  static createIlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
