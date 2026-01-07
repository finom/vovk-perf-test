import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gte")
export default class GteController {
  @operation({
    summary: "Get Gte",
  })
  @get()
  static getGte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gte",
  })
  @post("{id}")
  static createGte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
