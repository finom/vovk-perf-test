import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwu")
export default class CwuController {
  @operation({
    summary: "Get Cwu",
  })
  @get()
  static getCwu = procedure({
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
