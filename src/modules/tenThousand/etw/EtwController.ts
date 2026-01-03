import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etws")
export default class EtwController {
  @operation({
    summary: "Get Etws",
  })
  @get()
  static getEtws = procedure({
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
