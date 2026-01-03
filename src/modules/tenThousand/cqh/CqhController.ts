import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqhs")
export default class CqhController {
  @operation({
    summary: "Get Cqhs",
  })
  @get()
  static getCqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqh",
  })
  @post("{id}")
  static createCqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
