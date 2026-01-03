import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmis")
export default class CmiController {
  @operation({
    summary: "Get Cmis",
  })
  @get()
  static getCmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmi",
  })
  @post("{id}")
  static createCmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
