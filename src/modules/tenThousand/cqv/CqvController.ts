import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqv")
export default class CqvController {
  @operation({
    summary: "Get Cqv",
  })
  @get()
  static getCqv = procedure({
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
