import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijfs")
export default class IjfController {
  @operation({
    summary: "Get Ijfs",
  })
  @get()
  static getIjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijf",
  })
  @post("{id}")
  static createIjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
