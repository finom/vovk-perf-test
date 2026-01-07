import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijf")
export default class IjfController {
  @operation({
    summary: "Get Ijf",
  })
  @get()
  static getIjf = procedure({
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
