import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cly")
export default class ClyController {
  @operation({
    summary: "Get Cly",
  })
  @get()
  static getCly = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cly",
  })
  @post("{id}")
  static createCly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
