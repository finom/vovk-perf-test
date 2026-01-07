import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qc")
export default class QcController {
  @operation({
    summary: "Get Qc",
  })
  @get()
  static getQc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qc",
  })
  @post("{id}")
  static createQc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
