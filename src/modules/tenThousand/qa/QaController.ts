import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qa")
export default class QaController {
  @operation({
    summary: "Get Qa",
  })
  @get()
  static getQa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qa",
  })
  @post("{id}")
  static createQa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
