import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cww")
export default class CwwController {
  @operation({
    summary: "Get Cww",
  })
  @get()
  static getCww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cww",
  })
  @post("{id}")
  static createCww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
