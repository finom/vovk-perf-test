import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eew")
export default class EewController {
  @operation({
    summary: "Get Eew",
  })
  @get()
  static getEew = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eew",
  })
  @post("{id}")
  static createEew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
