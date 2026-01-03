import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qas")
export default class QaController {
  @operation({
    summary: "Get Qas",
  })
  @get()
  static getQas = procedure({
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
