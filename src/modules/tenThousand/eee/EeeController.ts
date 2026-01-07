import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eee")
export default class EeeController {
  @operation({
    summary: "Get Eee",
  })
  @get()
  static getEee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eee",
  })
  @post("{id}")
  static createEee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
