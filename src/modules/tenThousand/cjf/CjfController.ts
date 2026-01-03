import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjfs")
export default class CjfController {
  @operation({
    summary: "Get Cjfs",
  })
  @get()
  static getCjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjf",
  })
  @post("{id}")
  static createCjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
