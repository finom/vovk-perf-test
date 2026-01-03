import { procedure, prefix, get, post, operation } from "vovk";

@prefix("behs")
export default class BehController {
  @operation({
    summary: "Get Behs",
  })
  @get()
  static getBehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beh",
  })
  @post("{id}")
  static createBeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
