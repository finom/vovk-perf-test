import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cob")
export default class CobController {
  @operation({
    summary: "Get Cob",
  })
  @get()
  static getCob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cob",
  })
  @post("{id}")
  static createCob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
