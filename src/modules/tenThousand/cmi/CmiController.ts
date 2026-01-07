import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmi")
export default class CmiController {
  @operation({
    summary: "Get Cmi",
  })
  @get()
  static getCmi = procedure({
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
