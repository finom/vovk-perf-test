import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crqs")
export default class CrqController {
  @operation({
    summary: "Get Crqs",
  })
  @get()
  static getCrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crq",
  })
  @post("{id}")
  static createCrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
