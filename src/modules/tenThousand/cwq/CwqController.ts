import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwq")
export default class CwqController {
  @operation({
    summary: "Get Cwq",
  })
  @get()
  static getCwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwq",
  })
  @post("{id}")
  static createCwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
