import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqw")
export default class CqwController {
  @operation({
    summary: "Get Cqw",
  })
  @get()
  static getCqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqw",
  })
  @post("{id}")
  static createCqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
