import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etw")
export default class EtwController {
  @operation({
    summary: "Get Etw",
  })
  @get()
  static getEtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etw",
  })
  @post("{id}")
  static createEtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
