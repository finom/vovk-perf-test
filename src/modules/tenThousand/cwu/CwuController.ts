import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwus")
export default class CwuController {
  @operation({
    summary: "Get Cwus",
  })
  @get()
  static getCwus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwu",
  })
  @post("{id}")
  static createCwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
