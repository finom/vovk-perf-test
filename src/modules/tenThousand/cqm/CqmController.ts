import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqms")
export default class CqmController {
  @operation({
    summary: "Get Cqms",
  })
  @get()
  static getCqms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqm",
  })
  @post("{id}")
  static createCqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
