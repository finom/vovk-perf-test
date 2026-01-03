import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqvs")
export default class CqvController {
  @operation({
    summary: "Get Cqvs",
  })
  @get()
  static getCqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqv",
  })
  @post("{id}")
  static createCqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
