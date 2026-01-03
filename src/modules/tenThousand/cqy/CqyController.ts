import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqies")
export default class CqyController {
  @operation({
    summary: "Get Cqies",
  })
  @get()
  static getCqies = procedure({
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
