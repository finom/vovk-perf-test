import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqb")
export default class CqbController {
  @operation({
    summary: "Get Cqb",
  })
  @get()
  static getCqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqb",
  })
  @post("{id}")
  static createCqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
