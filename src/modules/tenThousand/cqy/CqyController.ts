import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqy")
export default class CqyController {
  @operation({
    summary: "Get Cqy",
  })
  @get()
  static getCqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqy",
  })
  @post("{id}")
  static createCqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
