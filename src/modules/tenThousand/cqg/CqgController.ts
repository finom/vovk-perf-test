import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqgs")
export default class CqgController {
  @operation({
    summary: "Get Cqgs",
  })
  @get()
  static getCqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqg",
  })
  @post("{id}")
  static createCqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
