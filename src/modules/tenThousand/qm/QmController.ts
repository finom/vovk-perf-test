import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qm")
export default class QmController {
  @operation({
    summary: "Get Qm",
  })
  @get()
  static getQm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qm",
  })
  @post("{id}")
  static createQm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
