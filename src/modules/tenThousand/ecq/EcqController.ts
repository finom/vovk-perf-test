import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecqs")
export default class EcqController {
  @operation({
    summary: "Get Ecqs",
  })
  @get()
  static getEcqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecq",
  })
  @post("{id}")
  static createEcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
